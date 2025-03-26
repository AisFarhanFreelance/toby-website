import { z } from "zod";

export const priceFormSchema = z.object({
  checkIn: z.date({
    required_error: "Check-in date is required",
  }),
  checkOut: z.date({
    required_error: "Check-out date is required",
  }),
});

export type PriceFormValues = z.infer<typeof priceFormSchema>;
