"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyPassportStrategy = void 0;
const passport_jwt_1 = require("passport-jwt");
const PrismaClient_1 = __importDefault(require("../../PrismaClient"));
const config_1 = require("../config");
const applyPassportStrategy = (passport) => {
    const options = {};
    options.jwtFromRequest = passport_jwt_1.ExtractJwt.fromHeader("token");
    options.secretOrKey = config_1.config.passport.secret;
    passport.use(new passport_jwt_1.Strategy(options, async (payload, done) => {
        try {
            const user = await PrismaClient_1.default.user.findUnique({
                where: { id: payload.id },
            });
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        }
        catch (error) {
            console.log(error);
            done(error);
        }
    }));
};
exports.applyPassportStrategy = applyPassportStrategy;
//# sourceMappingURL=index.js.map