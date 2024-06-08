import express, { Application, Request, Response } from "express";
import cors from "cors";

import { UserRoutes } from "./APP/modules/user/user.route";
import { StudentRoutes } from "./APP/modules/students/student.route";
import globalErrorHandler from "./APP/middlewares/globalErrorhandler";
import notFound from "./APP/middlewares/notFound";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/student", StudentRoutes);
app.use("/api/v1/users", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
app.use(notFound);
export default app;
