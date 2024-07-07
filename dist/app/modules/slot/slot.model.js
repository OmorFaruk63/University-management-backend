import { Schema, model } from "mongoose";
const slotSchema = new Schema({
    room: {
        type: Schema.Types.ObjectId,
        ref: "MeetingRoom",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    isBooked: {
        type: Boolean,
        default: false,
    },
});
export const Slot = model("Slot", slotSchema);
