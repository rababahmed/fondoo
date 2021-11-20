import express from "express";
import prisma from "../../../PrismaClient";

const router = express.Router();

router.post("/", async (req, res) => {
  const { passthrough, alert_name, subscription_id, cancel_url, update_url } =
    req.body;
  if (alert_name === "subscription_created") {
    await prisma.restaurant
      .update({
        where: { id: passthrough.restaurantId },
        data: {
          restaurantPlanId: passthrough.restaurantPlanId,
          subscription: {
            create: {
              paddleSubscriptionId: subscription_id,
              paddleCancelUrl: cancel_url,
              paddleUpdateUrl: update_url,
              restaurantPlan: {
                connect: {
                  id: passthrough.restaurantPlanId,
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
      .catch((err: any) => {
        console.log(err);
        res.status(400).send({ status: "error" });
      });
  }
});

module.exports = router;
