import { Schema, model } from "mongoose";
const meetingRoomSchema = new Schema({
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
export const MeetingRoom = model("MeetingRoom", meetingRoomSchema);
