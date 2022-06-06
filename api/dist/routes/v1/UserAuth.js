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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PrismaClient_1 = __importDefault(require("../../PrismaClient"));
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = require("../../lib/config");
const bcrypt = require("bcryptjs");
const router = express_1.default.Router();
router.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, role, restaurantID } = req.body;
        const hash = await bcrypt.hash(password, 10);
        if (restaurantID) {
            const result = await PrismaClient_1.default.user.create({
                data: {
                    firstName,
                    lastName,
                    phone,
                    role,
                    email,
                    password: hash,
                    restaurants: {
                        connect: {
                            id: restaurantID,
                        },
                    },
                },
            });
            res
                .status(200)
                .send({ message: "User added succesfully", data: result.id });
        }
        else {
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
            res
                .status(200)
                .send({ message: "User added succesfully", data: result.id });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error creating user" });
    }
});
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await PrismaClient_1.default.user.findUnique({
            where: {
                email,
            },
            include: {
                restaurants: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
        if (user) {
            const validPass = await bcrypt.compare(password, user.password);
            if (validPass) {
                const token = jwt.sign({ id: user.id, role: user.role }, config_1.config.passport.secret, {
                    expiresIn: config_1.config.passport.expiresIn,
                });
                res.status(200).send({
                    token: token,
                    isAuthenticated: true,
                    id: user.id,
                    role: user.role,
                    restaurantID: user.restaurants.length > 0 ? user.restaurants[0].id : "",
                    message: "User authenticated",
                    info: user,
                });
            }
            else {
                res.status(400).send({ message: "Incorrect Email/Password" });
            }
        }
        else {
            res.status(400).send({ message: "Incorrect Email/Password" });
        }
    }
    catch {
        res.status(400).send({ message: "User not found" });
    }
});
module.exports = router;
//# sourceMappingURL=UserAuth.js.map