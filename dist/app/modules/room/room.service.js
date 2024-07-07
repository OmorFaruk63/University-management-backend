import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse";
import { MeetingRoom } from "./room.model";
const insertRoomInfoInBD = async (payload, res) => {
    const roomData = await MeetingRoom.create(payload);
    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: "Room added successfully",
        data: roomData,
    });
};
const getSingleRoomFromBD = async (id, res) => {
    const singleRoomData = await MeetingRoom.findById(id);
    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: "Room retrieved successfully",
        data: singleRoomData,
    });
};
const getAllRoomFromBD = async (res) => {
    const allRoomData = await MeetingRoom.find();
    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: "All Room retrieved successfully",
        data: allRoomData,
    });
};
const updateSingleRoom = async (id, payload, res) => {
    const singleRoomData = await MeetingRoom.findById(id);
    if (!singleRoomData) {
        throw new Error("The room is not exits");
    }
    const updatedRoom = await MeetingRoom.findByIdAndUpdate(id, payload, {
        new: true,
    });
    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: "Room  updated successfully",
        data: updatedRoom,
    });
};
const deleteRoomFromBD = async (id, res) => {
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
