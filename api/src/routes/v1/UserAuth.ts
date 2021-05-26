import express from "express";
import prisma from "../../PrismaClient";
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone, role, restaurantID } =
      req.body;
    const hash = await bcrypt.hash(password, 10);
    const result = await prisma.user.create({
      data: {
        firstName,
        lastName,
        phone,
        role,
        email,
        password: hash,
        restaurants: {
          connect: {
            id: restaurantID,
          },
        },
      },
    });
    res.status(200).send(result);
  } catch {
    res.status(400).send({ message: "Error creating user" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      const validPass = await bcrypt.compare(password, user.password);
      if (validPass) {
        res.status(200).send({
          id: user.id,
          role: user.role,
          message: "User authenticated",
        });
      } else {
        res.status(400).send({ message: "Incorrect Password" });
      }
    } else {
      res.status(400).send({ message: "Incorrect Email" });
    }
  } catch {
    res.status(400).send({ message: "User not found" });
  }
});

module.exports = router;
