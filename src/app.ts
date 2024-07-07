import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./app/routes/routes";
// import notFound from "./app/middleware/notFoundHandler";
// import globalErrorHandler from "./app/middleware/globalErrorHandler";

// Initialize dotenv to load environment variables
dotenv.config();

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to enable CORS with specific origins
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

// Application-level routes
app.use("/api/v1", router);

// Root route
app.post("/", (req: Request, res: Response) => {
  console.log(req.body.roomData);
  res.send("Hello world");
});

// Global error handler middleware (uncomment and implement if needed)
// app.use(globalErrorHandler);

// Not found handler middleware (uncomment and implement if needed)
// app.use(notFound);

export default app;
