import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";

const bookingSchema = new Schema<TBooking>({
  room: {
    type: Schema.Types.ObjectId,
    required: [true, "Room is required!"],
    unique: true,
  },
  slots: {
    type: [Schema.Types.ObjectId],
    required: [true, "Room is required!"],
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "user info is required!"],
  },
  totalAmount: { type: Number, required: true },
  isConfirmed: {
    type: Boolean,
    enum: ["confirmed", "unconfirmed", "canceled"],
    required: true,
  },
});

export const Booking = model<TBooking>("Booking", bookingSchema);
