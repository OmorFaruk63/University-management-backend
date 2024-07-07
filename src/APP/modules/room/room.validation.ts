// validation.ts

import { z } from "zod";

export const meetingRoomSchema = z.object({
  name: z.string(),
  roomNo: z.number(),
  floorNo: z.number(),
  capacity: z.number(),
  pricePerSlot: z.number(),
  amenities: z.array(z.string()),
  isDeleted: z.boolean(),
});
