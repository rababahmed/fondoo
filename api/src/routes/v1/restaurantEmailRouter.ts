import express from "express";
import { pm } from "../../lib/postmark";
import prisma from "../../PrismaClient";

const router = express.Router();

router.post("/order-received/:orderId", async (req, res) => {
  try {
    const { orderId } = req.params;
    const orderDetails = await prisma.order.findUnique({
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
      orderDetails.restaurant.users.map((user: any) => {
        const data = {
          From: "Fondoo <notifications@fondoo.io>",
          To: `${user.email}`,
          TemplateId: 28178633,
          TemplateModel: {
            product_url: "https://fondoo.io",
            name: user.firstName,
            restaurant: orderDetails.restaurant.name,
            action_url: "https://app.fondoo.io",
            orderId: orderDetails.id,
            date: orderDetails.createdAt,
            products: orderDetails.items.map((item: any) => {
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
        pm.sendEmailWithTemplate(data)
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
    } else {
      res.status(400).send({
        message: "Order not found",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
});

module.exports = router;
