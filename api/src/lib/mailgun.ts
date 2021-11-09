import { config } from "./config";
import Mailgun from "mailgun-js";

export const mailgun = new Mailgun({
  apiKey: config.mailgun.apiKey,
  domain: config.mailgun.domain,
});
