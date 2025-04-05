"use client";

import { getBookingDetails } from "@/actions/villa-booking";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";

const VillaPaymentActions = ({
  orderId,
  status,
  paymentLink,
}: {
  orderId: string;
  status: number;
  paymentLink?: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handlePayment = () => {
    if (paymentLink) {
      window.open(paymentLink, "_blank"); // Open payment link in a new tab
    }
  };

  const checkStatus = () => {
    startTransition(async () => {
      setLoading(true);
      try {
        await getBookingDetails(orderId); // Call server action
        router.refresh(); // Refresh page to reflect updated status
      } finally {
        setLoading(false);
      }
    });
  };

  return (
    <>
      <Button
        className="button bg-toby-forest-ash text-toby-white w-full mt-6"
        disabled={status !== 0 || loading}
        onClick={handlePayment}
      >
        {loading ? "Processing..." : "Pay Now"}
      </Button>
      <Button
        className="button bg-toby-forest-ash text-toby-white w-full mt-6"
        disabled={status === 1 || isPending}
        onClick={checkStatus}
      >
        {isPending ? "Checking..." : "Check Payment Status"}
      </Button>
    </>
  );
};

export default VillaPaymentActions;
