"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PrismaClient_1 = __importDefault(require("../../PrismaClient"));
const router = express_1.default.Router();
router.get("/:domain", async (req, res) => {
    try {
        const { domain } = req.params;
        const result = await PrismaClient_1.default.restaurantConfig.findUnique({
            where: { domain: domain },
            include: { restaurant: true },
        });
        if (result) {
            res.status(200).send({ data: result });
        }
        else {
            res.status(400).send({ message: "Restaurant not found" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error creating user" });
    }
});
module.exports = router;
//# sourceMappingURL=restaurantRouter.js.map