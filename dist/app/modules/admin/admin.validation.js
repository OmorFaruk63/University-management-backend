// validation.ts
import { z } from "zod";
import { Types } from "mongoose";
const objectId = z.instanceof(Types.ObjectId);
const userNameSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
});
export const adminSchema = z.object({
    id: z.string(),
    user: objectId,
    name: userNameSchema,
    dateOfBirth: z.optional(z.date()),
    email: z.string().email(),
    contactNo: z.string(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    profileImg: z.optional(z.string()),
    isDeleted: z.boolean(),
});
