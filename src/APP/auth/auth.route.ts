import { Router } from "express";
import authController from "./auth.controller";

const authRoute = Router();

authRoute.post("/signup", authController.userSignUp);
authRoute.post("/login", authController.userLogin);

export default authRoute;
