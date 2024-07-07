import { Booking } from "./booking.model";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
const inserBookingInDB = async (payload, res) => {
    const createdBookingData = await Booking.create(payload);
    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: " Booking   successfully done",
        data: createdBookingData,
    });
};
const getAllBookingFromDB = async (res) => {
    const allBookingData = await Booking.find();
    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: "All booking retrived  successfully",
        data: allBookingData,
    });
};
const getAllUserBookingFromDB = async (res) => {
    const allUserBookingData = await Booking.find();
    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: "All user booking retrived  successfully",
        data: allUserBookingData,
    });
};
const updateBookingFromDB = async (id, payload, res) => {
    const updatedBookingData = await Booking.findByIdAndUpdate(id, {
        payload,
    }, {
        new: true,
    });
    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: "All user booking retrived  successfully",
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
