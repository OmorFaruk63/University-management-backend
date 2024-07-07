import { TAdmin } from "../admin/admin.interface";
import { AdminModel } from "../admin/admin.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const insertAdminInfoInDB = async (payload: TAdmin) => {
  const createdAdminData = await AdminModel.create(payload);
  return createdAdminData;
};
const insertUserInfoInDB = async (payload: TUser) => {
  const createUserData = await User.create(payload);
  return createUserData;
};
const userService = {
  insertAdminInfoInDB,
  insertUserInfoInDB,
};
export default userService;
