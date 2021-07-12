import express from "express";
import prisma from "../../PrismaClient";

const router = express.Router();

router.get("/:domain", async (req, res) => {
  try {
    const { domain } = req.params;

    const result = await prisma.restaurantConfig.findUnique({
      where: { domain: domain },
      include: { restaurant: true },
    });

    if (result) {
      res.status(200).send({ data: result });
    } else {
      res.status(400).send({ message: "Restaurant not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "Error creating user" });
  }
});

module.exports = router;
