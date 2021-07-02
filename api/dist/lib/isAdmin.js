"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const PrismaClient_1 = __importDefault(require("../PrismaClient"));
const isAdmin = async (req, res) => {
    try {
        const id = req.body.role;
        const user = await PrismaClient_1.default.user.findUnique({ where: { id: id } });
        if (user && user.role === "Admin") {
            return;
        }
        if (!user) {
            res.send({ message: "Not Allowed" });
        }
    }
    catch (e) {
        res.send(e);
    }
};
exports.isAdmin = isAdmin;
//# sourceMappingURL=isAdmin.js.map