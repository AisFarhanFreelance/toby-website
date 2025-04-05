import { createClient } from "@/lib/utility/supabase/server";

type getTransactionStatusMidtransParams = {
  orderId: string;
};

type getTransactionStatusMidtransResponse = {
  transaction_status: string;
  order_id: string;
};

export async function getTransactionStatusMidtrans(
  params: getTransactionStatusMidtransParams,
): Promise<getTransactionStatusMidtransResponse> {
  const { orderId } = params;

  const response = await fetch(
    `${process.env.MIDTRANS_BASE_URL}/v2/${orderId}/status`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${process.env.MIDTRANS_SERVER_KEY_HASH}`,
      },
    },
  );

  return await response.json();
}

type updateBookingParams = {
  orderId: string;
};

export async function updateBookingStatus(
  params: updateBookingParams,
): Promise<void> {
  const { orderId } = params;

  const response = await getTransactionStatusMidtrans({
    orderId,
  });

  const { transaction_status } = response;

  const supabase = await createClient();

  const { error } = await supabase
    .from("bookings")
    .update({ status: mapTransactionStatus(transaction_status) })
    .eq("id", extractUUID(orderId));

  if (error) {
    throw new Error("Failed to update booking status");
  }
}

function mapTransactionStatus(status: string): number {
  if (["settlement", "capture"].includes(status)) {
    return 1;
  }

  if (["expire", "cancel", "deny"].includes(status)) {
    return 2;
  }

  return 0;
}

function extractUUID(input: string): string | null {
  const match = input.match(/^([0-9a-fA-F-]{36})-\d+$/);
  return match ? match[1] : null;
}
