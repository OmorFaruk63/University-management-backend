import { Router } from "express";
import auth from "../../middleware/auth";
import validateRequest from "../../middleware/validateRequest";
import { USER_ROLE } from "../user/user.constant";
import bookingController from "./booking.controller";
import {
  bookingSchemaValidation,
  updateBookingSchemaValidation,
} from "./booking.validation";

const bookingRoute = Router();

bookingRoute.post(
  "/create-booking",
  auth(USER_ROLE.user),
  validateRequest(bookingSchemaValidation),
  bookingController.createBookingController
);
bookingRoute.get(
  "/bookings",
  auth(USER_ROLE.admin),
  bookingController.getAllBookingController
);
bookingRoute.get(
  "/my-bookings",
  auth(USER_ROLE.user),
  bookingController.getAllUserBookingController
);
bookingRoute.put(
  "/:id",
  auth(USER_ROLE.admin),
  validateRequest(updateBookingSchemaValidation),
  bookingController.updateBookingController
);

export default bookingRoute;
