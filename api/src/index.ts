import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "../prisma/generated/type-graphql/";
const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

const bodyParser = require("body-parser");
const userRouter = require("./routes/UserAuth");

interface Context {
  prisma: PrismaClient;
}
const PORT = process.env.PORT || 4000;

const prisma = new PrismaClient();
const app = express();

const main = async () => {
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(passport.initialize());

  await prisma.$connect();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers,
      validate: false,
    }),
    introspection: true,
    playground: true,
    context: (): Context => ({ prisma }),
  });

  apolloServer.applyMiddleware({ app });

  app.use("/user", userRouter);

  app.post(
    "/log-in",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/",
    })
  );

  passport.use(
    new LocalStrategy(async (email, password, done) => {
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (
        bcrypt.compare(password, user.password, (err, res) => {
          if (res) {
            // passwords match! log user in
            return done(null, user);
          } else {
            // passwords do not match!
            return done(null, false, { message: "Incorrect password" });
          }
        })
      ) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

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
