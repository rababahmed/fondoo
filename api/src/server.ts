import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createContext } from "./context";
import { schema } from "./graphql/schema";
import passport from "passport";
import v1Router from "./routes/v1/index";
import cors from "cors";
import { applyPassportStrategy } from "./lib/passport/index";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";

const PORT = process.env.PORT || 4000;

const app = express();

Sentry.init({
  dsn: "https://f9d96ddc47274dacb3d42f4c53d1dbae@o881594.ingest.sentry.io/6255936",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  environment:
    process.env.NODE_ENV === "production" ? "production" : "development",
});

export const main = async () => {
  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.tracingHandler());
  app.use(express.json());
  app.use(passport.initialize());
  app.use(cors());
  app.use(Sentry.Handlers.errorHandler());
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  applyPassportStrategy(passport);

  const apolloServer = new ApolloServer({
    schema,
    introspection: process.env.NODE_ENV === "production" ? false : true,
    playground: process.env.NODE_ENV === "production" ? false : true,
    context: createContext,
    uploads: true,
  });

  apolloServer.applyMiddleware({ app });

  app.use("/v1", v1Router);
  app.get("/", (_, res: any) => {
    res.status(200).send("All systems operational");
  });

  app.use(Sentry.Handlers.errorHandler());

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
  });
};
