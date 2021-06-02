import express from "express";
import prisma from "../../PrismaClient";
import * as jwt from "jsonwebtoken";
import { config } from "../../lib/config";
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
  } catch (err) {
    console.log(err);
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
        const token = jwt.sign({ id: user.id }, config.passport.secret, {
          expiresIn: config.passport.expiresIn,
        });
        res.status(200).send({
          token: token,
          isAuthenticated: true,
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
