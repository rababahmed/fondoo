import { PrismaClient } from "@prisma/client";
import * as jwt from "jsonwebtoken";
import { config } from "./lib/config";

const prisma = new PrismaClient();

export type Context = {
  prisma: PrismaClient;
  user?: any;
};

function getUser(req: any) {
  try {
    const token = req.headers.token;
    const user = jwt.verify(token, config.passport.secret);
    if (user) {
      return user;
    }
  } catch (e) {
    return e;
  }
}

export const createContext = ({ req }: any): Context => ({
  prisma,
  user: getUser(req),
});
