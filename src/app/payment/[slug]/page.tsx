import { getBookingDetails } from "@/actions/villa-booking";

import VillaPaymentActions from "@/components/payment/villa-payment-action";

const VillaPayment = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const data = await getBookingDetails(slug);

  if (!data) {
    return (
      <div className="items-center justify-center">
        <div>Villa Payment Not Found</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Villa Payment</h1>
      <p>Order ID : {data?.id ?? ""}</p>
      <p>Amount : {data?.total_price ?? ""}</p>
      <p>Status : {getStatus(data?.status ?? 0)}</p>
      <VillaPaymentActions
        orderId={data?.id ?? ""}
        status={data?.status ?? 0}
        paymentLink={data?.payment_link ?? ""}
      />
    </div>
  );
};

function getStatus(status: number): string {
  if (status === 1) {
    return "Paid";
  }
  if (status === 2) {
    return "Failed";
  }
  return "Pending";
}

export default VillaPayment;
