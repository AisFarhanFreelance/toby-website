"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

import {
  headerFormSchema,
  HeaderFormValues,
} from "@/lib/schema/headerFormSchema";

import DatePicker from "./datePicker";
import { Button } from "./button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import Input from "./input";

const HeaderForm = () => {
  const form = useForm<HeaderFormValues>({
    resolver: zodResolver(headerFormSchema),
  });

  const onSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <motion.div
          className="flex justify-center items-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="lg:w-[1068px] space-x-6 mr-8 flex justify-between items-center flex-wrap relative bottom-2">
            <FormField
              control={form.control}
              name="checkIn"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-toby-white font-mourich text-sm font-bold leading-4">
                    Check In
                  </FormLabel>
                  <FormControl>
                    <DatePicker
                      placeholder="Check-in"
                      value={field.value}
                      onChange={field.onChange}
                      minDate={new Date()}
                    />
                  </FormControl>
                  <FormMessage className="font-mourich text-base font-extrabold" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="checkOut"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-toby-white font-mourich text-sm font-bold leading-4">
                    Check Out
                  </FormLabel>
                  <FormControl>
                    <DatePicker
                      placeholder="Check-out"
                      value={field.value}
                      onChange={field.onChange}
                      minDate={form.watch("checkIn") || new Date()}
                    />
                  </FormControl>
                  <FormMessage className="font-mourich text-base font-extrabold" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-toby-white font-mourich text-sm font-bold leading-4">
                    Max Price
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Price"
                      value={field.value ?? ""}
                      onChange={(e) => {
                        const value =
                          e.target.value === ""
                            ? undefined
                            : e.target.valueAsNumber;
                        field.onChange(value);
                      }}
                      className="text-toby-white border-toby-frosted-pearl border-2 bg-transparent 
                    placeholder:text-toby-frosted-pearl/80
                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
                    [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </FormControl>
                  <FormMessage className="font-mourich text-base font-extrabold" />
                </FormItem>
              )}
            />
          </div>
          <div className="w-[200px]">
            <Button
              type="submit"
              className="hidden lg:block font-bold text-base w-full"
            >
              Find Now!
            </Button>
          </div>
        </motion.div>
      </form>
    </Form>
  );
};

export default HeaderForm;
