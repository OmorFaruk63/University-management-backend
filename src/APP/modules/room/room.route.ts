import { Router } from "express";
import { USER_ROLE } from "../user/user.constant";

import validateRequest from "../../middleware/validateRequest";
import roomController from "./room.controoler";
import { meetingRoomSchema } from "./room.validation";
// import auth from "../../middleware/auth";

const roomRoute = Router();

roomRoute.post(
  "/create-room",
  // auth(USER_ROLE.admin),
  validateRequest(meetingRoomSchema),
  roomController.createRoom
);
roomRoute.get(
  "/:id",
  // auth(),
  roomController.getSingleRoom
);
roomRoute.get(
  "/",
  // auth(),
  roomController.getAllRoom
);
roomRoute.put(
  "/:id",
  // auth(USER_ROLE.admin),
  validateRequest(meetingRoomSchema),
  roomController.updateRoom
);
roomRoute.delete(
  "/:id",
  // auth(USER_ROLE.admin),

  roomController.deleteRoom
);
export default roomRoute;
