import { config } from "./config";
let postmark = require("postmark");

export const pm = new postmark.ServerClient(config.postmark.apiKey);
