// validation.ts

import { z } from "zod";
import { Types } from "mongoose";

const userNameSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

export const adminSchemaValidation = z.object({
  id: z.string(),
  user: z.string({
    invalid_type_error: "user id must be string",
    required_error: "user is required",
  }),
  name: userNameSchema,
  dateOfBirth: z.string().optional(),
  email: z.string().email(),
  contactNo: z.string().optional(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  profileImg: z.string().optional(),
  isDeleted: z.boolean(),
});
