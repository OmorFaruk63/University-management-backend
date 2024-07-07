import { Request, Response } from "express";
import { TUser } from "../modules/user/user.interface";
import { User } from "../modules/user/user.model";
import { sendResponse } from "../utils/sendResponse";
import bcrypt from "bcrypt";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";
import config from "../config/config";
import { TAuthLogin } from "./auth.interface";
const inserUserInfoInDB = async (payload: TUser) => {
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(payload.password, salt);
  payload.password = hashedPassword;
  const data = await User.create(payload);
  return data;
};

const authenticUserLogin = async (payload: TAuthLogin) => {
  //checking if the user is  logged-in

  const isExitsUser = await User.findOne({ email: payload.email });
  if (!isExitsUser) {
    throw new Error("user does not exits");
  }
  // checking if the password  does not match
  try {
    const isVerifiedPassword = await bcrypt.compare(
      payload.password,
      isExitsUser.password
    );
    if (!isVerifiedPassword) {
      console.log(isVerifiedPassword);
      throw new Error("Password dont match");
    }
  } catch (error) {
    console.log(error);
  }

  const token = jwt.sign(
    { role: "user", address: "chnadpur" },
    config.jwt_secret as string,
    { expiresIn: "10d" }
  );
  return { token, isExitsUser };
};

const authServices = {
  inserUserInfoInDB,
  authenticUserLogin,
};
export default authServices;
