import { Types } from "mongoose";
export type TUserName = {
  firstName: string;
  lastName: string;
};
export type TAdmin = {
  id: string;
  user: Types.ObjectId;
  name: TUserName;
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  presentAddress: string;
  permanentAddress: string;
  profileImg?: string;
  isDeleted: boolean;
};
