"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PrismaClient_1 = __importDefault(require("../../PrismaClient"));
const mailgun_1 = require("../../lib/mailgun");
const router = express_1.default.Router();
router.post("/order-received/:orderId", async (req, res) => {
    try {
        const { orderId } = req.params;
        const orderDetails = await PrismaClient_1.default.order.findUnique({
            where: {
                id: orderId,
            },
            include: {
                restaurant: { select: { name: true, users: true } },
            },
        });
        if (orderDetails?.restaurant?.users) {
            orderDetails.restaurant.users.map((user) => {
                const data = {
                    from: "TezzBites <noreply@alerts.tezzbites.com>",
                    to: `${user.email}`,
                    subject: `You've received a new order on ${orderDetails.restaurant.name}`,
                    template: "restaurant-order-received",
                    "h:X-Mailgun-Variables": JSON.stringify({
                        firstName: user.firstName,
                        restaurant: orderDetails.restaurant.name,
                        action_url: "https://app.tezzbites.com/orders",
                        support_email: "support@tezzbites.com",
                    }),
                };
                mailgun_1.mailgun.messages().send(data, (error, body) => {
                    if (error) {
                        res.status(500).json({
                            message: "Error sending email",
                            error,
                        });
                    }
                    else {
                        res.status(200).json({
                            message: "Email sent successfully",
                            body,
                        });
                    }
                });
            });
        }
        else {
            res.status(400).send({
                message: "Order not found",
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
});
module.exports = router;
//# sourceMappingURL=restaurantEmailRouter.js.map