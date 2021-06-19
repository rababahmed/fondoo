"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PrismaClient_1 = __importDefault(require("../../PrismaClient"));
const router = express_1.default.Router();
router.get("/", async (req, res) => {
    try {
        const result = await PrismaClient_1.default.restaurant.findMany();
        res.json(result);
    }
    catch {
        res.json({ message: `${req} was not successful` });
    }
});
router.post("/:id/", async (req, res) => {
    try {
        const { name, email, url } = req.body;
        const result = await PrismaClient_1.default.restaurant.create({
            data: {
                name,
                email,
                url,
            },
        });
        res.json(result);
    }
    catch {
        res.json({ message: "Error creating restaurant" });
    }
});
router.put("/:id", async (req, res) => {
    try {
        const payload = req.body;
        const result = await PrismaClient_1.default.restaurant.update({
            where: { id: req.params.id },
            data: payload,
        });
        res.send(result);
    }
    catch {
        res.send({ message: "Error updating restaurant" });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const result = await PrismaClient_1.default.restaurant.delete({
            where: { id: req.params.id },
        });
        res.send(result);
    }
    catch {
        res.send({ message: "Error updating restaurant" });
    }
});
module.exports = router;
//# sourceMappingURL=RestaurantRouter.js.map