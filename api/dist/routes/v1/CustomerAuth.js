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
    const { firstName, lastName, email, password, phone, restaurantId } = req.body;
    const hash = await bcrypt.hash(password, 10);
    await PrismaClient_1.default.customer
        .create({
        data: {
            firstName,
            lastName,
            phone,
            email,
            password: hash,
            restaurants: {
                connect: {
                    id: restaurantId,
                },
            },
        },
    })
        .then(async (response) => {
        const validPass = await bcrypt.compare(password, response.password);
        if (validPass) {
            const token = jwt.sign({ id: response?.id, restaurantId: restaurantId }, config_1.config.passport.secret, {
                expiresIn: config_1.config.passport.expiresIn,
            });
            res.status(200).send({
                token: token,
                isAuthenticated: true,
                id: response.id,
                message: "User authenticated",
            });
        }
    })
        .catch((err) => {
        console.log(err);
        res.status(400).send({ message: "User already exists" });
    });
});
router.post("/login", async (req, res) => {
    try {
        const { email, phone, password, restaurantId } = req.body;
        if (email) {
            const customer = await PrismaClient_1.default.customer.findUnique({
                where: {
                    email,
                },
            });
            if (customer) {
                const validPass = await bcrypt.compare(password, customer.password);
                if (validPass) {
                    const token = jwt.sign({ id: customer.id, restaurantId: restaurantId }, config_1.config.passport.secret, {
                        expiresIn: config_1.config.passport.expiresIn,
                    });
                    const address = await PrismaClient_1.default.customerAddress.findFirst({
                        where: {
                            customerId: customer.id,
                        },
                    });
                    res.status(200).send({
                        token: token,
                        isAuthenticated: true,
                        id: customer.id,
                        customerAddressId: address?.id,
                        message: "customer authenticated",
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
        if (phone) {
            const customer = await PrismaClient_1.default.customer.findUnique({
                where: {
                    phone,
                },
            });
            if (customer) {
                const validPass = await bcrypt.compare(password, customer.password);
                if (validPass) {
                    const token = jwt.sign({ id: customer.id, restaurantId: restaurantId }, config_1.config.passport.secret, {
                        expiresIn: config_1.config.passport.expiresIn,
                    });
                    res.status(200).send({
                        token: token,
                        isAuthenticated: true,
                        id: customer.id,
                        message: "User authenticated",
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
    }
    catch {
        res.status(400).send({ message: "User not found" });
    }
});
module.exports = router;
//# sourceMappingURL=CustomerAuth.js.map