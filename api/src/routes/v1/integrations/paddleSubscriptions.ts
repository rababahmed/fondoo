import express from "express";
import prisma from "../../../PrismaClient";

const router = express.Router();

router.post("/:alert_name", async (req, res) => {
  const { alert_name } = req.params;
  if (alert_name === "subscription_created") {
    const { passthrough } = req.body;
    await prisma.restaurant
      .update({
        where: { id: passthrough.restaurantId },
        data: { restaurantPlanId: passthrough.restaurantPlanId },
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
