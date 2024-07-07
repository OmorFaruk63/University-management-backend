import httpStatus from "http-status";

import { MeetingRoom } from "./room.model";

import { Response } from "express";
import { TMeetingRoom } from "./room.interface";
import { sendResponse } from "../../utils/sendResponse";

const insertRoomInfoInBD = async (payload: TMeetingRoom) => {
  const roomData = await MeetingRoom.create(payload);
  return roomData;
};
const getSingleRoomFromBD = async (id: unknown) => {
  const singleRoomData = await MeetingRoom.findById(id);
  return singleRoomData;
};

const getAllRoomFromBD = async () => {
  const allRoomData = await MeetingRoom.find();
  return allRoomData;
};

const updateSingleRoom = async (
  id: unknown,
  payload: Partial<TMeetingRoom>
) => {
  const updatedRoom = await MeetingRoom.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return updatedRoom;
};
const deleteRoomFromBD = async (id: unknown, res: Response) => {
  const deletedData = await MeetingRoom.findByIdAndDelete(id);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Room  deleted successfully",
    data: deletedData,
  });
};
const roomServices = {
  insertRoomInfoInBD,
  getSingleRoomFromBD,
  getAllRoomFromBD,
  updateSingleRoom,
  deleteRoomFromBD,
};
export default roomServices;
