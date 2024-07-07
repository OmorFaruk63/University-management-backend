import { Router } from "express";
import roomRoute from "../modules/room/room.route";
import bookingRoute from "../modules/booking/booking.route";
import slotRoute from "../modules/slot/slot.route";
import userRoute from "../modules/user/user.route";
import authRoute from "../auth/auth.route";

const router = Router();

const routeModules = [
  {
    path: "/rooms",
    route: roomRoute,
  },
  {
    path: "/booking",
    route: bookingRoute,
  },
  {
    path: "/slot",
    route: slotRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/auth",
    route: authRoute,
  },
];

routeModules.forEach((route) => router.use(route.path, route.route));

export default router;
