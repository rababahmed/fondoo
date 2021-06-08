import express from "express";
import prisma from "../../PrismaClient";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await prisma.restaurant.findMany();
    res.json(result);
  } catch {
    res.json({ message: `${req} was not successful` });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, url } = req.body;
    const result = await prisma.restaurant.create({
      data: {
        name,
        email,
        url,
      },
    });
    res.json(result);
  } catch {
    res.json({ message: "Error creating restaurant" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const payload = req.body;
    const result = await prisma.restaurant.update({
      where: { id: req.params.id },
      data: payload,
    });
    res.send(result);
  } catch {
    res.send({ message: "Error updating restaurant" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await prisma.restaurant.delete({
      where: { id: req.params.id },
    });
    res.send(result);
  } catch {
    res.send({ message: "Error updating restaurant" });
  }
});

module.exports = router;
