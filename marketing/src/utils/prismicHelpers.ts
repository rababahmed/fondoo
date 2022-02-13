// ~/utils/prismicHelpers.js
import Prismic from "@prismicio/client";

import {
  apiEndpoint,
  accessToken,
  routeResolver,
} from "../../prismicConfiguration";

// -- @prismicio/client initialisation
// Initialises the Prismic Client that's used for querying the API and passes it any query options.
export const PrismicClient = Prismic.client(apiEndpoint, { accessToken });
