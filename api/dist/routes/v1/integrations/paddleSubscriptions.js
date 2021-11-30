"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PrismaClient_1 = __importDefault(require("../../../PrismaClient"));
const router = express_1.default.Router();
router.post("/", async (req, res) => {
    const { passthrough, alert_name, subscription_id, cancel_url, update_url } = req.body;
    const data = JSON.parse(passthrough);
    if (alert_name === "subscription_created") {
        await PrismaClient_1.default.restaurant
            .update({
            where: { id: data.restaurantId },
            data: {
                restaurantPlanId: data.restaurantPlanId,
                subscription: {
                    create: {
                        paddleSubscriptionId: subscription_id,
                        paddleCancelUrl: cancel_url,
                        paddleUpdateUrl: update_url,
                        restaurantPlan: {
                            connect: {
                                id: data.restaurantPlanId,
                            },
                        },
                    },
                },
            },
        })
            .then(() => {
            res.status(200).send({
                status: "success",
            });
        })
            .catch((err) => {
            console.log(err);
            res
                .status(400)
                .send({
                status: "error",
                message: "Could not create subscription",
                error: err.stack,
            });
        });
    }
    res.status(400).send({ status: "error", message: "No alert type found" });
});
module.exports = router;
//# sourceMappingURL=paddleSubscriptions.js.map