"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  headerFormSchema,
  HeaderFormValues,
} from "@/lib/schema/headerFormSchema";

import DatePicker from "./datePicker";
import { Button } from "./button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./form";

const HeaderForm = () => {
  const form = useForm<HeaderFormValues>({
    resolver: zodResolver(headerFormSchema),
  });

  const onSubmit = (data: HeaderFormValues) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex items-center">
          <div className="hidden lg:flex w-full space-x-6 mr-8">
            <FormField
              control={form.control}
              name="checkIn"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <DatePicker
                      placeholder="Check-in"
                      value={field.value}
                      onChange={field.onChange}
                      minDate={new Date()}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="checkOut"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <DatePicker
                      placeholder="Check-out"
                      value={field.value}
                      onChange={field.onChange}
                      minDate={form.watch("checkIn") || new Date()}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="hidden lg:block font-bold text-base w-full"
          >
            Find Now!
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default HeaderForm;
