import { Schema, model } from "mongoose";

const UserNameSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const AdminSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: UserNameSchema, required: true },
  dateOfBirth: { type: String },
  email: { type: String, required: true, unique: true },
  contactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  profileImg: { type: String },
  isDeleted: { type: Boolean, default: false },
});

export const AdminModel = model("Admin", AdminSchema);
