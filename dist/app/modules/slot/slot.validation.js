import { z } from "zod";
import { Types } from "mongoose";
const objectId = z.instanceof(Types.ObjectId);
export const slotSchema = z.object({
    room: objectId.refine((obj) => obj instanceof Types.ObjectId, {
        message: "Invalid ObjectId",
    }),
    date: z.date(),
    startTime: z.string().refine((val) => /\d{2}:\d{2}/.test(val), {
        message: "Invalid time format, should be HH:MM",
    }),
    endTime: z.string().refine((val) => /\d{2}:\d{2}/.test(val), {
        message: "Invalid time format, should be HH:MM",
    }),
    isBooked: z.boolean().default(false),
});
