"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postmark_1 = require("../../lib/postmark");
const PrismaClient_1 = __importDefault(require("../../PrismaClient"));
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
                items: {
                    include: { product: { select: { name: true, price: true } } },
                },
            },
        });
        if (orderDetails?.restaurant?.users) {
            orderDetails.restaurant.users.map((user) => {
                const data = {
                    From: "Fondoo <notifications@fondoo.io>",
                    To: user.email,
                    TemplateAlias: "restaurant-order-notification",
                    TemplateModel: {
                        product_url: "https://fondoo.io",
                        name: user.firstName,
                        restaurant: orderDetails.restaurant.name,
                        action_url: "https://app.fondoo.io",
                        orderId: orderDetails.id,
                        date: orderDetails.createdAt,
                        products: orderDetails.items.map((item) => {
                            return {
                                name: item.product.name,
                                amount: item.product.price,
                            };
                        }),
                        total: orderDetails.total,
                        support: "mailto:hello@fondoo.io",
                        product_name: "Fondoo",
                    },
                };
                postmark_1.pm.sendEmailWithTemplate(data)
                    .then(() => {
                    res.status(200).json({
                        message: "Email sent successfully",
                    });
                })
                    .catch(() => {
                    res.status(500).json({
                        message: "Error sending email",
                    });
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
        console.error(err);
        res.status(400).send(err.message);
    }
});
module.exports = router;
//# sourceMappingURL=restaurantEmailRouter.js.map