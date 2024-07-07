import { Router } from "express";
import roomRoute from "../modules/room/room.route";
import bookingRoute from "../modules/booking/booking.route";
import slotRoute from "../modules/slot/slot.route";
import userRoute from "../modules/user/user.route";
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
];
routeModules.forEach((route) => router.use(route.path, route.route));
export default router;
