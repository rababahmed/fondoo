// ~/prismicio.js

//Imports
import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "./sm.json";

// -- Prismic Repo API Endpoint
export const endpoint = sm.apiEndpoint;

// -- Prismic Repo Name //Regex to get repo ID
export const repositoryName = new URL(endpoint).hostname.split(".")[0];

const routeResolver = {
  routes: [
    {
      type: "feature_page",
      path: "/feature/:uid",
    },
    {
      type: "homepage",
      path: "/",
    },
  ],
};

// -- @prismicio/client initialisation
// Initialises the Prismic Client that's used for querying the API and passes it any query options.
export const createClient = (config) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    accessToken: process.env.prismicAccessToken,
    routes: routeResolver.routes,
  });

  enableAutoPreviews({
    client,
    context: config?.context,
    req: config?.req,
  });

  return client;
};
