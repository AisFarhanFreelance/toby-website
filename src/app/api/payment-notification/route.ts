import crypto from "crypto";
import { updateBookingStatus } from "./payment-notification";

export async function POST(request: Request) {
  const { order_id, status_code, gross_amount, signature_key } =
    await request.json();

  const serverKey = process.env.MIDTRANS_SERVER_KEY;

  if (!serverKey) {
    return new Response("Server key is missing", { status: 500 });
  }

  // Generate the expected signature
  const expectedSignature = crypto
    .createHash("sha512")
    .update(order_id + status_code + gross_amount + serverKey)
    .digest("hex");

  // Verify signature
  if (signature_key !== expectedSignature) {
    return new Response("Invalid signature", { status: 403 });
  }

  await updateBookingStatus({ orderId: order_id });

  return new Response("Signature verified", { status: 200 });
}
