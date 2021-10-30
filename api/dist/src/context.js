"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
const client_1 = require("@prisma/client");
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = require("./lib/config");
const prisma = new client_1.PrismaClient();
function getUser(req) {
    try {
        const token = req.headers.token;
        const user = jwt.verify(token, config_1.config.passport.secret);
        if (user) {
            return user;
        }
    }
    catch (e) {
        return e;
    }
}
const createContext = ({ req }) => ({
    prisma,
    user: getUser(req),
});
exports.createContext = createContext;
//# sourceMappingURL=context.js.map