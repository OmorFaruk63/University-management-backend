import { z } from "zod";
import { Types } from "mongoose";
const objectId = z.instanceof(Types.ObjectId);
export const bookingSchema = z.object({
    room: objectId,
    slots: z.array(objectId),
    user: objectId,
    totalAmount: z.number(),
    isConfirmed: z.boolean(),
});
