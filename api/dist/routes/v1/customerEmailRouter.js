"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PrismaClient_1 = __importDefault(require("../../PrismaClient"));
const mailgun_1 = require("../../lib/mailgun");
const router = express_1.default.Router();
router.post("/order-confirmed/:orderId", async (req, res) => {
    try {
        const { orderId } = req.params;
        const orderDetails = await PrismaClient_1.default.order.findUnique({
            where: {
                id: orderId,
            },
            include: {
                items: {
                    include: {
                        product: { select: { name: true } },
                    },
                },
                customer: { select: { email: true, firstName: true, lastName: true } },
                restaurant: { select: { name: true } },
            },
        });
        if (orderDetails) {
            const data = {
                from: "TezzBites <noreply@alerts.tezzbites.com>",
                to: `${orderDetails?.customer?.email}`,
                subject: "Your Order Has Been Confirmed",
                template: "customer-order-confirmed",
                "h:X-Mailgun-Variables": JSON.stringify({
                    firstName: orderDetails?.customer?.firstName,
                    orderId: orderId,
                    restaurantName: orderDetails?.restaurant?.name,
                    date: orderDetails?.createdAt,
                    items: orderDetails?.items,
                    total: orderDetails?.total,
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
//# sourceMappingURL=customerEmailRouter.js.map