"use server";

import { createClient } from "@/lib/utility/supabase/server";

import { Booking } from "@/lib/types/booking";

interface checkVillaAvailabilityParams {
  villaId: string;
  checkIn: Date;
  checkOut: Date;
}

export async function checkVillaAvailability(
  params: checkVillaAvailabilityParams,
) {
  const { villaId, checkIn, checkOut } = params;

  const supabase = await createClient();

  const now = new Date();

  const { data, error } = await supabase
    .from("bookings")
    .select(`id, status, expired_at`)
    .eq("villa_id", parseInt(villaId))
    .or(
      `and(check_in.lte.${checkOut.toISOString()},check_out.gte.${checkIn.toISOString()})`,
    );

  const bookings = (data as Booking[]) ?? [];

  const filteredData = bookings.filter((booking) => {
    return (
      booking.status === 1 ||
      (booking.status === 0 && new Date(booking.expired_at) > now)
    );
  });

  if (error) return false;
  return filteredData.length === 0;
}

interface insertBookingParams {
  villaId: string;
  checkIn: Date;
  checkOut: Date;
  adultsCount: number;
  childrenCount: number;
  price: number;
  expiredAt?: Date;
}

interface insertBookingResponse {
  id: string;
}

export async function insertBooking(
  params: insertBookingParams,
): Promise<insertBookingResponse[] | null> {
  const {
    villaId,
    checkIn,
    checkOut,
    adultsCount,
    childrenCount,
    price,
    expiredAt,
  } = params;

  const supabase = await createClient();

  const diffDays = Math.ceil(
    Math.abs(checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24),
  );

  const { data, error } = await supabase
    .from("bookings")
    .insert({
      villa_id: parseInt(villaId),
      check_in: checkIn.toISOString(),
      check_out: checkOut.toISOString(),
      adults_count: adultsCount,
      children_count: childrenCount,
      total_price: price * diffDays,
      expired_at: expiredAt,
    })
    .select();

  if (error) return null;
  return data;
}

type getBookingDetailsResponse = {
  id: string;
  total_price: number;
  status: number;
  payment_link: string;
};

export async function getBookingDetails(
  bookingId: string,
): Promise<getBookingDetailsResponse | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", bookingId)
    .single();

  if (error) return null;
  return data;
}
