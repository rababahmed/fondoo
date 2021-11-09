import express from "express";
import prisma from "../../PrismaClient";
import { mailgun } from "../../lib/mailgun";

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
      },
    });

    if (orderDetails?.restaurant?.users) {
      orderDetails.restaurant.users.map((user: any) => {
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
        mailgun.messages().send(data, (error, body) => {
          if (error) {
            res.status(500).json({
              message: "Error sending email",
              error,
            });
          } else {
            res.status(200).json({
              message: "Email sent successfully",
              body,
            });
          }
        });
      });
    } else {
      res.status(400).send({
        message: "Order not found",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});

module.exports = router;
