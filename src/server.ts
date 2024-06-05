import mongoose from "mongoose";
import app from "./app";
import config from "./APP/config";

main();

async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    app.listen(config.port, () => {
      console.log(
        `Example app listening on port http://localhost:${config.port}`
      );
    });
  } catch (error) {
    console.log(error);
  }
}
