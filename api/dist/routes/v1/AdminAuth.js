"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PrismaClient_1 = __importDefault(require("../../PrismaClient"));
const passport_1 = __importDefault(require("passport"));
const isAdmin_1 = require("../../lib/isAdmin");
const bcrypt = require("bcryptjs");
const router = express_1.default.Router();
router.post("/signup", isAdmin_1.isAdmin, passport_1.default.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, role } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const result = await PrismaClient_1.default.user.create({
            data: {
                firstName,
                lastName,
                phone,
                role,
                email,
                password: hash,
            },
        });
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error creating user" });
    }
});
module.exports = router;
//# sourceMappingURL=AdminAuth.js.map