import express from "express";
import { PrismaClient } from "@prisma/client";
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const result = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hash,
      },
    });
    res.json(result);
  } catch {
    res.json({ message: "Error creating user" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (user) {
      const validPass = await bcrypt.compare(password, user.password);
      if (validPass) {
        res.send({
          id: user.id,
          restaurant: user.restaurantId,
          role: user.role,
          message: "User authenticated",
        });
      } else {
        res.send({ message: "Incorrect Password" });
      }
    } else {
      res.send({ message: "Incorrect Email" });
    }
  } catch {
    res.json({ message: "User not found" });
  }
});

module.exports = router;
