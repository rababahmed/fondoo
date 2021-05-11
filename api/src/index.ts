import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";

const PORT = process.env.PORT || 4000;

const prisma = new PrismaClient();

const main = async () => {
  const app = express();

  await prisma.$connect();

  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
