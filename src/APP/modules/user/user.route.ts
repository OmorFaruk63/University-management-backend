import { Router } from "express";
import userController from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import {  adminSchemaValidation } from "../admin/admin.validation";
import { userSchemaValidation } from "./user.validation";

const userRoute = Router();

userRoute.post(
  "/create-admin",
  validateRequest(adminSchemaValidation),
  userController.createAdmin
);
userRoute.post(
  "/create-user",
  validateRequest(userSchemaValidation),
  userController.createUser
);
export default userRoute;
