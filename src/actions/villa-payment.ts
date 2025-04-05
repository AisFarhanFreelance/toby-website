"use server";

import { createClient } from "@/lib/utility/supabase/server";

type paymentLinkParams = {
  orderId: string;
  villaName: string;
  villaPrice: number;
  days: number;
};

type paymentLinkResponse = {
  order_id?: string;
  payment_url?: string;
  error_messages?: string[];
};

export async function createMidtransPaymentLink(
  params: paymentLinkParams,
): Promise<paymentLinkResponse> {
  const { orderId, villaName, villaPrice, days } = params;

  const response = await fetch(
    `${process.env.MIDTRANS_BASE_URL}/v1/payment-links`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${process.env.MIDTRANS_SERVER_KEY_HASH}`,
      },
      body: JSON.stringify({
        transaction_details: {
          order_id: orderId,
          gross_amount: villaPrice * days,
        },
        item_details: [
          {
            id: orderId,
            name: villaName,
            price: villaPrice,
            quantity: days,
          },
        ],
        expiry: {
          duration: process.env.MIDTRANS_PAYMENT_LINK_EXPIRED_TIME ?? 60,
          unit: "minutes",
        },
      }),
    },
  );

  return response.json();
}

export async function checkMidtransPaymentStatus(orderId: string) {
  const response = await fetch(
    `${process.env.MIDTRANS_BASE_URL}/v2/${orderId}/status`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${process.env.MIDTRANS_SERVER_KEY_HASH}`,
      },
    },
  );

  return response.json();
}

interface updateBookingParams {
  bookingId: string;
  paymentLink?: string;
  status?: string;
  expired_at?: Date;
}

export async function updateBooking(params: updateBookingParams) {
  const supabase = await createClient();

  const { bookingId, paymentLink, status, expired_at } = params;

  const { error } = await supabase
    .from("bookings")
    .update({
      payment_link: paymentLink,
      status,
      expired_at,
    })
    .eq("id", bookingId);

  if (error) return false;
  return true;
}
