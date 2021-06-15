import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createContext } from "./context";
import { schema } from "./graphql/schema";
import passport from "passport";
import v1Router from "./routes/v1/index";
import cors from "cors";
import { applyPassportStrategy } from "./lib/passport/index";

const PORT = process.env.PORT || 4000;

const app = express();

export const main = async () => {
  app.use(express.json());
  app.use(passport.initialize());
  app.use(cors());

  applyPassportStrategy(passport);

  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    context: createContext,
    uploads: true,
  });

  apolloServer.applyMiddleware({ app });

  app.use("/v1", v1Router);

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
  });
};
