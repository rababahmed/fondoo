import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "../prisma/generated/type-graphql/";
import prisma from "./PrismaClient";

const passport = require("passport");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/UserAuth");
const restaurantRouter = require("./routes/restaurantRouter");

interface Context {
  prisma: PrismaClient;
}
const PORT = process.env.PORT || 4000;

const app = express();

const main = async () => {
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(passport.initialize());
  app.use(cors());

  await prisma.$connect();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers,
      validate: false,
    }),
    introspection: true,
    playground: true,
    context: (): Context => ({ prisma }),
    tracing: true,
  });

  apolloServer.applyMiddleware({ app });

  app.use("/user", userRouter);
  app.use("/restaurants", restaurantRouter);

  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
};

main().catch((e) => {
  throw e;
});
