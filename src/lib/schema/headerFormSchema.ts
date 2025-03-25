import { z } from "zod";

export const headerFormSchema = z
  .object({
    checkIn: z.date({
      required_error: "Check-in date is required",
      invalid_type_error: "Please select a valid check-in date",
    }),
    checkOut: z.date({
      required_error: "Check-out date is required",
      invalid_type_error: "Please select a valid check-out date",
    }),
  })
  .refine((data) => data.checkOut > data.checkIn, {
    message: "Check-out date must be after check-in date",
    path: ["checkOut"],
  });

export type HeaderFormValues = z.infer<typeof headerFormSchema>;
