import { z } from "zod";
import { Types } from "mongoose";

export const bookingSchemaValidation = z.object({
  room: z.string({
    invalid_type_error: "room must be a string",
    required_error: "room is required",
  }),
  slots: z.array(z.string()),
  user: z.string(),
  totalAmount: z.number(),
  isConfirmed: z.boolean(),
});
export const updateBookingSchemaValidation = z.object({
  room: z.string({
    invalid_type_error: "room must be a string",
    required_error: "room is required",
  }).optional(),
  slots: z.array(z.string()).optional(),
  user: z.string().optional(),
  totalAmount: z.number().optional(),
  isConfirmed: z.boolean().optional(),
});
