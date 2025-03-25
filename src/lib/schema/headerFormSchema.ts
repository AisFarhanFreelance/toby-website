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
    price: z
      .union([
        z
          .string()
          .min(1, "Price is required")
          .transform((val) => parseFloat(val.replace(/[^0-9.]/g, ""))),
        z.number(),
      ])
      .refine((val) => !isNaN(val), {
        message: "Must be a valid number",
      })
      .refine((val) => val >= 0, {
        message: "Price cannot be negative",
      })
      .refine((val) => val <= 1000000, {
        message: "Price cannot exceed 1,000,000",
      }),
  })
  .refine((data) => data.checkOut > data.checkIn, {
    message: "Check-out date must be after check-in date",
    path: ["checkOut"],
  });

export type HeaderFormValues = z.infer<typeof headerFormSchema>;
