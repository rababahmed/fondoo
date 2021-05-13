import express from "express";
import { PrismaClient } from "@prisma/client";
const bcrypt = require("bcryptjs");

interface User {
  firstName: any;
  lastName: any;
  email: any;
}

const prisma = new PrismaClient();
const router = express.Router();

router.post("/signup", async (req, res, next) => {
  try {
    await bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (err) {
        return next(err);
      }
      const { firstName, lastName, email } = req.body;
      const result = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword,
        },
      });
      res.json(result);
    });
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
