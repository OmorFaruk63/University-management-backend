import { Router } from "express";
import userController from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { adminSchema } from "../admin/admin.validation";
import { userSchema } from "./user.validation";
const userRoute = Router();
userRoute.post("/create-admin", validateRequest(adminSchema), userController.createAdmin);
userRoute.post("/create-user", validateRequest(userSchema), userController.createUser);
export default userRoute;
