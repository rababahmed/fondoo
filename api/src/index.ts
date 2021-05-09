import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./generated/typegraphql-prisma/index";

interface Context {
  prisma: PrismaClient;
}

const prisma = new PrismaClient();

const main = async () => {
  const app = express();

  await prisma.$connect();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers,
      validate: false,
    }),
    playground: true,
    context: (): Context => ({ prisma }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(3000, () => {
    console.log("server started on http://localhost:3000");
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
