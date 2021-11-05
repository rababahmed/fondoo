import * as dotenv from "dotenv";
import { main } from "./server";

dotenv.config();

main().catch((e) => {
  throw e;
});
