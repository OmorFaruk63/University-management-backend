import { sendResponse } from "../../utils/sendResponse";
import { AdminModel } from "../admin/admin.model";
import httpStatus from "http-status";
import { User } from "./user.model";
const insertAdminInfoInDB = async (payload, res) => {
    const createdAdminData = await AdminModel.create(payload);
    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: "Admin created   successfully",
        data: createdAdminData,
    });
};
const insertUserInfoInDB = async (payload, res) => {
    const createUserData = await User.create(payload);
    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: "User created   successfully",
        data: createUserData,
    });
};
const userService = {
    insertAdminInfoInDB,
    insertUserInfoInDB,
};
export default userService;
