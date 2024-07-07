import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: number;
  address: string;
  role: "admin" | "user";
};

export interface UserModel extends Model<TUser> {
  isUserExistsByCustomId(id: string): Promise<TUser>;
}

export type TUserRole = keyof typeof USER_ROLE;
