import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  saltRounds: process.env.SALTS_ROUNDS,
  default_password: process.env.DEFAULT_PASS,
};
