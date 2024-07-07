import { Router } from "express";
import authController from "./auth.controller";
const userRouter = Router();
userRouter.post("/auth/signup", authController.userSignUp);
userRouter.post("/auth/login", authController.userLogin);
