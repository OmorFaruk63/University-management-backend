import { Response, response } from "express";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import expres from "express";
const inserBookingInDB = async (payload: TBooking, res: Response) => {
  const createdBookingData = await Booking.create(payload);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: " Booking   successfully created",
    data: createdBookingData,
  });
};
const getAllBookingFromDB = async (res: Response) => {
  const allBookingData = await Booking.find();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "All booking retrived  successfully",
    data: allBookingData,
  });
};
const getAllUserBookingFromDB = async (res: Response) => {
  const allUserBookingData = await Booking.find();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "All user booking retrived  successfully",
    data: allUserBookingData,
  });
};
const updateBookingFromDB = async (
  id: any,
  payload: Partial<TBooking>,
  res: Response
) => {
  const updatedBookingData = await Booking.findByIdAndUpdate(id, payload, {
    new: true,
  });

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "room updated  successfully",
    data: updatedBookingData,
  });
};
const bookingServices = {
  inserBookingInDB,
  getAllBookingFromDB,
  getAllUserBookingFromDB,
  updateBookingFromDB,
};
export default bookingServices;
