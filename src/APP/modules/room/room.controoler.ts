import { Request, Response, response } from "express";
import roomServices from "./room.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";

const createRoom = catchAsync(async (req, res) => {
  const roomData = req.body;
  await roomServices.insertRoomInfoInBD(roomData);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Room added successfully",
    data: roomData,
  });
});
const getSingleRoom = catchAsync(async (req, res) => {
  const { id } = req.params;
  const singleRoomData = await roomServices.getSingleRoomFromBD(id);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Room retrieved successfully",
    data: singleRoomData,
  });
});
const getAllRoom = catchAsync(async (req, res) => {
  const allRoomData = await roomServices.getAllRoomFromBD();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "All Room retrieved successfully",
    data: allRoomData,
  });
});

const updateRoom = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedRoom = await roomServices.updateSingleRoom(id, req.body);
  // if (!singleRoomData) {
  //   next("The room is not exits");
  // }
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Room  updated successfully",
    data: updatedRoom,
  });
});
const deleteRoom = (req: Request, res: Response) => {
  const { id } = req.params;
  roomServices.deleteRoomFromBD(id, res);
};
const roomController = {
  createRoom,
  getSingleRoom,
  getAllRoom,
  updateRoom,
  deleteRoom,
};

export default roomController;
