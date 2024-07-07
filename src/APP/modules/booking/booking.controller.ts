import { Request, Response } from "express";
import bookingServices from "./booking.service";

const createBookingController = (req: Request, res: Response) => {
  const bookingData = req.body;
  bookingServices.inserBookingInDB(bookingData, res);
};
const getAllBookingController = (req: Request, res: Response) => {
  bookingServices.getAllBookingFromDB(res);
};
const getAllUserBookingController = (req: Request, res: Response) => {
  bookingServices.getAllUserBookingFromDB(res);
};
const updateBookingController = (req: Request, res: Response) => {
  const updateData = req.body;
  const { id } = req.params;
  bookingServices.updateBookingFromDB(id, updateData, res);
};
const bookingController = {
  createBookingController,
  getAllBookingController,
  getAllUserBookingController,
  updateBookingController,
};

export default bookingController;
