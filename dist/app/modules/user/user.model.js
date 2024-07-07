import { Schema, model } from "mongoose";
const userSchema = new Schema({
    name: { type: String, required: [true, "Name is required!"] },
    email: { type: String, required: [true, "Emain is required!"] },
    password: { type: String, required: [true, "Password is required!"] },
    phone: { type: Number, required: [true, "Phone number is required!"] },
    address: { type: String, required: [true, "Address is required!"] },
    role: {
        type: String,
        enum: ["admin", "user"],
        required: [true, "Only admin or user approvel"],
    },
});
// userSchema.statics.isUserExistsByCustomId = async function (id: string) {
//   return await User.findById(id).select("+password");
// };
export const User = model("User", userSchema);
