import { Strategy, ExtractJwt } from "passport-jwt";
import prisma from "src/PrismaClient";
import { config } from "../config";
import { User } from "../database/models";

export const applyPassportStrategy = (passport: any) => {
  const options = { jwtFromRequest, secretOrKey };
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  options.secretOrKey = config.passport.secret;
  passport.use(
    new Strategy(options, async ({ payload, done }: any) => {
      await prisma.user.findUnique({ where: { email: payload.email } }),
        function ({ err, user }: any) {
          if (err) return done(err, false);
          if (user) {
            return done(null, {
              email: user.email,
            });
          }
          return done(null, false);
        };
    })
  );
};
