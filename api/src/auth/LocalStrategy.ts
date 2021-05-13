const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
import { PrismaClient } from "@prisma/client";
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

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

module.exports = passport;
