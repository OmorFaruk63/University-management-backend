import { Schema, model } from "mongoose";
import { TMeetingRoom } from "./room.interface";

const meetingRoomSchema = new Schema<TMeetingRoom>({
  name: {
    type: String,
    required: true,
  },
  roomNo: {
    type: Number,
    required: true,
    unique: true,
  },
  floorNo: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  pricePerSlot: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const MeetingRoom = model<TMeetingRoom>(
  "MeetingRoom",
  meetingRoomSchema
);
