import { Strategy, ExtractJwt } from "passport-jwt";
import prisma from "../../PrismaClient";
import { config } from "../config";

export const applyPassportStrategy = (passport: any) => {
  const options: any = {};
  options.jwtFromRequest = ExtractJwt.fromHeader("token");
  options.secretOrKey = config.passport.secret;
  passport.use(
    new Strategy(options, async (payload, done) => {
      try {
        const user = await prisma.user.findUnique({
          where: { id: payload.id },
        });
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (error) {
        console.log(error);
        done(error);
      }
    })
  );
};
