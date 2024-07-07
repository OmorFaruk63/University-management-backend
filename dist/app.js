import express from "express";
import cors from "cors";
import router from "./app/routes/routes";
const app = express();
import dotenv from "dotenv";
// import notFound from "./app/middleware/notFoundHandler";
// import notFound from "./src/app/modules/admin/booking-api/src/app/middleware/notFoundHandler";
dotenv.config();
// parsers
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
// application level routes
app.use("/api/v1", router);
// global eroor handler whith middleware
// app.use(globalEroorHandler);
// // notFound  handler
// app.use(notFound);
export default app;
