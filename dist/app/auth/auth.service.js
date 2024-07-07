import { User } from "../modules/user/user.model";
import { sendResponse } from "../utils/sendResponse";
import bcrypt from "bcrypt";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";
import config from "../config/config";
const inserUserInfoInDB = async (paylod, res) => {
    const userInfo = {
        ...paylod,
    };
    bcrypt.genSalt(12, function (err, salt) {
        bcrypt.hash(paylod.password, salt, function (err, hashedpasseord) {
            if (err) {
                throw new Error("Password did not hashed");
            }
            // Store hash in your password DB.
            userInfo.password = hashedpasseord;
        });
    });
    const data = await User.create(userInfo);
    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: "sign-up  succesfully done!",
        data: data,
    });
};
const authenticUserLogin = async (req, res) => {
    const { loginInfo } = req.body;
    //checking if the user is  logged-in
    const isExitsUser = await User.find({ email: loginInfo.email });
    if (!isExitsUser) {
        throw new Error("user does not exits");
    }
    // checking if the password  does not match
    bcrypt.compare(loginInfo.password, isExitsUser.password, function (err, result) {
        if (err) {
            throw new Error("Password does not  match");
        }
    });
    const token = jwt.sign({ name: "athik", address: "chnadpur" }, config.jwt_secret, { expiresIn: "10d" });
    res.status(httpStatus.OK).json({
        status: 200,
        success: true,
        message: "Successfully log-in done!",
        token,
        data: isExitsUser,
    });
};
const authServices = {
    inserUserInfoInDB,
    authenticUserLogin,
};
export default authServices;
