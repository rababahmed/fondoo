import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createContext } from "./context";
import { schema } from "./GraphQL/schema";
import "./GraphQL/generated/nexus";

const passport = require("passport");
const cors = require("cors");
const bodyParser = require("body-parser");
// const userRouter = require("./routes/UserAuth");
// const restaurantRouter = require("./routes/restaurantRouter");

const PORT = process.env.PORT || 4000;

const app = express();

const main = async () => {
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(passport.initialize());
  app.use(cors());

  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    context: createContext(),
  });

  apolloServer.applyMiddleware({ app });

  // app.use("/user", userRouter);
  // app.use("/restaurants", restaurantRouter);

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
  });
};

main().catch((e) => {
  throw e;
});
