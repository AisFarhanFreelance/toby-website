"use client";

import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/schema/contact-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import Input from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/text-area";

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="">
          <div className="flex flex-col gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="toby-twilight-ash font-mourich text-sm font-bold leading-4">
                    Name<span className="text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Name"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage className="font-mourich text-base font-extrabold" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="inquiry"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="toby-twilight-ash font-mourich text-sm font-bold leading-4">
                    Inquiry<span className="text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Tell Us About Your Inquiry"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage className="font-mourich text-base font-extrabold" />
                </FormItem>
              )}
            />

            <FormItem className="flex-1">
              <FormLabel className="toby-twilight-ash font-mourich text-sm font-bold leading-4">
                File
              </FormLabel>
              <FormControl>
                <Input type="file" />
              </FormControl>
              <FormMessage className="font-mourich text-base font-extrabold" />
            </FormItem>
          </div>
          <Button
            type="submit"
            className="button bg-toby-forest-ash text-toby-white w-full mt-6"
          >
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
}
