"use server";

import { createClient } from "@/lib/utility/supabase/server";

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

  const { data, error } = await supabase
    .from("bookings")
    .select("id")
    .eq("villa_id", parseInt(villaId))
    .or(
      `and(check_in.lte.${checkOut.toISOString()},check_out.gte.${checkIn.toISOString()})`,
    );

  if (error) return false;
  return data.length === 0;
}

interface insertBookingParams {
  villaId: string;
  checkIn: Date;
  checkOut: Date;
  adultsCount: number;
  childrenCount: number;
  price: number;
}

interface insertBookingResponse {
  id: string;
}

export async function insertBooking(
  params: insertBookingParams,
): Promise<insertBookingResponse[] | null> {
  const { villaId, checkIn, checkOut, adultsCount, childrenCount, price } =
    params;

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
    })
    .select();

  if (error) return null;
  return data;
}
