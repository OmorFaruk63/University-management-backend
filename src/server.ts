import app from "./app";
import mongoose from "mongoose";
import { Server } from "http";
// connect with monogodb
let server: Server;
const main = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log(`The application has  been connected to Mongodb `);
    server = app.listen(process.env.PORT, () => {
      console.log(`The app is listing ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
main();

// synchoronus and asynchoronus error handling
process.on("unhandledRejection", (promise, error) => {
  console.log(
    "unhandledRejection detected :" + promise + "the error is:" + error
  );
  if (server) {
    server.close();
    process.exit(1);
  }
});
process.on("uncaughtException", (err) => {
  console.log("uncaughtException detected" + err);
  process.exit(1);
});
