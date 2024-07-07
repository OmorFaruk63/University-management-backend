import { Router } from "express";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";
import validateRequest from "../../middleware/validateRequest";

import slotController from "./slot.controller";
import { slotSchema } from "./slot.validation";

const slotRoute = Router();

slotRoute.post(
  "/create-slot",
  // auth(USER_ROLE.admin),
  validateRequest(slotSchema),
  slotController.createSlotController
);
slotRoute.get("/availability", slotController.getAllSlotController);

export default slotRoute;
