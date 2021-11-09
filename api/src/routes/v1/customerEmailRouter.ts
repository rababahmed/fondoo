import express from "express";
import prisma from "../../PrismaClient";
import { mailgun } from "../../lib/mailgun";

const router = express.Router();

router.post("/order-confirmed/:orderId", async (req, res) => {
  try {
    const { orderId } = req.params;
    const orderDetails = await prisma.order.findUnique({
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
    // console.log(orderDetails?.items[0].product.name);
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
