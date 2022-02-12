import { PrismicClient } from "./prismicHelpers";
import Prismic from "@prismicio/client";

export const fetchHomePage = async () => {
  return PrismicClient.query("");
};
