import { Response } from "express";
import { TSlot } from "./slot.interface";
import { Slot } from "./slot.model";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

const inserSlotInDB = async (payload: TSlot) => {
  const createdSlotData = await Slot.create(payload);
 return createdSlotData
};
const getAllSlotsFromDB = async () => {
  const allSlotsData = await Slot.find()
 return allSlotsData
};

const slotService = {
  inserSlotInDB,
  getAllSlotsFromDB,
};
export default slotService;
