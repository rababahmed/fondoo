"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PrismaClient_1 = __importDefault(require("../../PrismaClient"));
const postmark_1 = require("../../lib/postmark");
const router = express_1.default.Router();
router.post("/order/:orderId/confirmed", async (req, res) => {
    try {
        const { orderId } = req.params;
        const orderDetails = await PrismaClient_1.default.order.findUnique({
            where: {
                id: orderId,
            },
            include: {
                items: {
                    include: {
                        product: { select: { name: true, price: true } },
                    },
                },
                customer: { select: { email: true, firstName: true, lastName: true } },
                restaurant: {
                    select: { name: true, url: true, logo: true, businessPhone: true },
                },
            },
        });
        if (orderDetails) {
            const data = {
                From: orderDetails?.restaurant?.name +
                    " <notifications@restaurants.fondoo.io>",
                To: orderDetails?.customer?.email,
                TemplateAlias: "customer-order-accepted",
                TemplateModel: {
                    url: orderDetails.restaurant.url,
                    logo: "https://cdn.tezzbites.com/" + orderDetails.restaurant.logo,
                    name: orderDetails.customer?.firstName,
                    restaurant: orderDetails.restaurant.name,
                    support: orderDetails.restaurant.businessPhone,
                    orderId: orderDetails.id,
                    date: orderDetails.createdAt,
                    products: orderDetails.items.map((item) => {
                        return {
                            name: item.product.name,
                            amount: item.product.price,
                        };
                    }),
                    total: orderDetails.total,
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