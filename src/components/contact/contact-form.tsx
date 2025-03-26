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
import { createClient } from "@/lib/utility/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const supabase = createClient();
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const uploadFile = async (file: File) => {
    const fileExt = file.name.split(".").pop();
    const filePath = `${Date.now()}.${fileExt}`;

    const { error } = await supabase.storage
      .from("attachments")
      .upload(filePath, file);

    if (error) {
      return null;
    }

    return supabase.storage.from("attachments").getPublicUrl(filePath).data
      .publicUrl;
  };

  const onSubmit = async (data: ContactFormValues) => {
    let attachmentUrl = null;

    if (file) {
      attachmentUrl = await uploadFile(file);
    }

    const insertData = {
      ...data,
      attachment: attachmentUrl,
    };

    await supabase.from("contact_entries").insert([insertData]);

    router.push("/");
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
                <Input type="file" onChange={handleFileChange} />
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
