"use client";

import { checkVillaAvailability, insertBooking } from "@/actions/villa-booking";
import {
  createMidtransPaymentLink,
  updateBooking,
} from "@/actions/villa-payment";
import {
  PriceFormValues,
  priceFormSchema,
} from "@/lib/schema/price-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import DatePicker from "@/components/ui/datePicker";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import Stepper from "./stepper";

interface PriceFormProps {
  price: number;
  villaName: string;
}

const PriceForm = (props: PriceFormProps) => {
  const { price, villaName } = props;

  const form = useForm<PriceFormValues>({
    resolver: zodResolver(priceFormSchema),
  });

  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const { slug } = useParams();
  const router = useRouter();

  const expiryTime = process.env.MIDTRANS_PAYMENT_LINK_EXPIRED_TIME ?? 60;

  const onSubmit = async (villaId: string, data: PriceFormValues) => {
    const { checkIn, checkOut } = data;

    const isAvailable = await checkVillaAvailability({
      villaId,
      checkIn,
      checkOut,
    });

    if (!isAvailable) {
      form.setError("error", {
        type: "manual",
        message: "Villa is not available on selected dates",
      });
      return;
    }

    form.setError("error", {
      type: "manual",
      message: "",
    });

    const booking = await insertBooking({
      villaId,
      checkIn,
      checkOut,
      adultsCount,
      childrenCount,
      price,
      expiredAt: new Date(Date.now() + expiryTime * 60 * 1000),
    });

    if (!booking) {
      form.setError("error", {
        type: "manual",
        message: "Failed to book villa",
      });
      return;
    }

    const bookingId = booking[0].id;

    const diffDays = Math.ceil(
      Math.abs(checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24),
    );

    const paymentLink = await createMidtransPaymentLink({
      orderId: bookingId,
      villaName,
      villaPrice: price,
      days: diffDays,
    });

    if (!paymentLink.payment_url) {
      form.setError("error", {
        type: "manual",
        message: "Failed to create payment link",
      });
      return;
    }

    await updateBooking({
      bookingId,
      paymentLink: paymentLink.payment_url,
      expired_at: new Date(Date.now() + expiryTime * 60 * 1000),
    });

    router.push(`/payment/${bookingId}`);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) =>
          onSubmit(slug?.toString() ?? "", data),
        )}
      >
        <div className="space-y-8">
          <div className="flex space-x-3 w-full">
            <div className="w-full">
              <FormField
                name="checkIn"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="font-bold text-sm">
                      Check In
                    </FormLabel>
                    <FormControl>
                      <DatePicker
                        placeholder="Enter Date"
                        value={field.value}
                        onChange={field.onChange}
                        minDate={new Date()}
                        iconColor="oklch(50% 0.0566 139.32)"
                        buttonClassName="border-toby-forest-ash/50 text-toby-forest-ash/50 border-2 text-xs sm:text-base font-bold"
                      />
                    </FormControl>
                    <FormMessage className="font-mourich text-base font-extrabold" />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <FormField
                name="checkOut"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="font-bold text-sm">
                      Check Out
                    </FormLabel>
                    <FormControl>
                      <DatePicker
                        placeholder="Enter Date"
                        value={field.value}
                        onChange={field.onChange}
                        minDate={new Date()}
                        iconColor="oklch(50% 0.0566 139.32)"
                        buttonClassName="border-toby-forest-ash/50 text-toby-forest-ash/50 border-2 text-xs font-bold"
                      />
                    </FormControl>
                    <FormMessage className="font-mourich text-base font-extrabold" />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="uppercase flex flex-col">
                <span className="text-sm lg:text-base font-bold">Adults</span>
                <span className="text-toby-forest-ash/50 text-xs font-bold">
                  Age 13+
                </span>
              </div>
              <div>
                <Stepper
                  min={0}
                  max={5}
                  value={0}
                  onChange={(value) => setAdultsCount(value)}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="uppercase flex flex-col">
                <span className="text-sm lg:text-base font-bold">Children</span>
                <span className="text-toby-forest-ash/50 text-xs font-bold">
                  Age 1-12
                </span>
              </div>
              <div>
                <Stepper
                  min={0}
                  max={5}
                  value={0}
                  onChange={(value) => setChildrenCount(value)}
                />
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="bg-toby-forest-ash text-toby-frosted-pearl w-full"
          >
            Book
          </Button>
          <FormField
            name="error"
            render={() => (
              <FormItem className="flex-1">
                <FormMessage className="font-mourich text-base font-extrabold"></FormMessage>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default PriceForm;
