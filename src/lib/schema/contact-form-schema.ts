import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  inquiry: z.string({
    required_error: "Inquiry is required",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
