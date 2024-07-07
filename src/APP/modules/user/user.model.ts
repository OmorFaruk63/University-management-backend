import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
  name: { type: String, required: [true, "Name is required!"] },
  email: { type: String, required: [true, "Email is required!"] },
  password: { type: String, required: [true, "Password is required!"] },
  phone: { type: Number, required: [true, "Phone number is required!"] },
  address: { type: String, required: [true, "Address is required!"] },
  role: {
    type: String,
    enum: ["admin", "user"],
    required: [true, "Only admin or user approvel"],
  },
});
userSchema.statics.isUserExistsByCustomId = async function (id: string) {
  return await User.findById(id).select("+password");
};
export const User = model<TUser>("User", userSchema);
