/* eslint-disable no-console */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel } from "./form";
import {
  priceFormSchema,
  PriceFormValues,
} from "@/lib/schema/price-form-schema";
import DatePicker from "./datePicker";
import Stepper from "./stepper";

const PriceForm = () => {
  const form = useForm<PriceFormValues>({
    resolver: zodResolver(priceFormSchema),
  });
  return (
    <Form {...form}>
      <form action="">
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
                        buttonClassName="border-toby-forest-ash/50 text-toby-forest-ash/50 border-2 text-xs font-bold"
                      />
                    </FormControl>
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
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="uppercase flex flex-col">
                <span className="text-sm font-bold">Adults</span>
                <span className="text-toby-forest-ash/50 text-xs font-bold">
                  Age 13+
                </span>
              </div>
              <div>
                <Stepper
                  min={0}
                  max={5}
                  value={0}
                  onChange={(value) => console.log("New Value:", value)}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="uppercase flex flex-col">
                <span className="text-sm font-bold">Children</span>
                <span className="text-toby-forest-ash/50 text-xs font-bold">
                  Age 1-12
                </span>
              </div>
              <div>
                <Stepper
                  min={0}
                  max={5}
                  value={0}
                  onChange={(value) => console.log("New Value:", value)}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default PriceForm;
