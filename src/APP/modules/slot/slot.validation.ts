import { z } from "zod";
import { Types } from "mongoose";

export const slotSchema = z.object({
  room: z.string({
    invalid_type_error: "room id must be string",
    required_error: "room is required",
  }),
  date: z.string(),
  startTime: z.string().refine((val) => /\d{2}:\d{2}/.test(val), {
    message: "Invalid time format, should be HH:MM",
  }),
  endTime: z.string().refine((val) => /\d{2}:\d{2}/.test(val), {
    message: "Invalid time format, should be HH:MM",
  }),
  isBooked: z.boolean().default(false),
});
