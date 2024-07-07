import { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import slotService from "./slot.service";
import { catchAsync } from "../../utils/catchAsync";
import httpStatus from "http-status";

const createSlotController = catchAsync(async (req, res) => {
  const slotData = req.body;

  const createdSlotData = await slotService.inserSlotInDB(slotData);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Slot  created successfully",
    data: createdSlotData,
  });
});
const getAllSlotController = catchAsync(async (req, res) => {
  const allSlotsData = await slotService.getAllSlotsFromDB();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "All Slots are retrived  successfully",
    data: allSlotsData,
  });
});
const slotController = {
  createSlotController,
  getAllSlotController,
};

export default slotController;
