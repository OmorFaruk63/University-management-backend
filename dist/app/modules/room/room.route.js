import { Router } from "express";
import { meetingRoomSchema } from "./room.validation";
import validateRequest from "../../middleware/validateRequest";
import roomController from "./room.controoler";
// import auth from "../../middleware/auth";
const roomRoute = Router();
roomRoute.post("/create-room", 
// auth(USER_ROLE.admin),
validateRequest(meetingRoomSchema), roomController.createRoom);
roomRoute.get("/:id", 
// auth(),
validateRequest(meetingRoomSchema), roomController.getSingleRoom);
roomRoute.put("/:id", 
// auth(USER_ROLE.admin),
validateRequest(meetingRoomSchema), roomController.updateRoom);
roomRoute.delete("/:id", 
// auth(USER_ROLE.admin),
validateRequest(meetingRoomSchema), roomController.deleteRoom);
export default roomRoute;
