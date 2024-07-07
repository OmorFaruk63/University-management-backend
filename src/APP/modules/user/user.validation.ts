import { z } from "zod";

export const userSchemaValidation = z.object({
  name: z.string(),
  email: z.string().email("invalid email"),
  password: z.string(),
  phone: z.number().min(4),
  address: z.string(),
  role: z.enum(["admin", "user"]),
});
