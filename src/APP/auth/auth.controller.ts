import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import authServices from "./auth.service";
import { sendResponse } from "../utils/sendResponse";
import { catchAsync } from "../utils/catchAsync";
import httpStatus from "http-status";
const userSignUp = catchAsync(async (req, res) => {
  const userInfo = req.body;
  const data = await authServices.inserUserInfoInDB(userInfo);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "sign-up  succesfully done!",
    data: data,
  });
});
const userLogin = catchAsync(async (req, res) => {
  const userInfo = req.body;
  const { token, isExitsUser } = await authServices.authenticUserLogin(
    userInfo
  );
  res.status(httpStatus.OK).json({
    status: 200,
    success: true,
    message: "Successfully log-in done!",
    token,
    data: isExitsUser,
  });
});
const authController = {
  userSignUp,
  userLogin,
};
export default authController;
