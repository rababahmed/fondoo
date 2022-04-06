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
    if (restaurantID) {
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
      res
        .status(200)
        .send({ message: "User added succesfully", data: result.id });
    } else {
      const result = await prisma.user.create({
        data: {
          firstName,
          lastName,
          phone,
          role,
          email,
          password: hash,
        },
      });
      res
        .status(200)
        .send({ message: "User added succesfully", data: result.id });
    }
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
      include: {
        restaurants: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    if (user) {
      const validPass = await bcrypt.compare(password, user.password);
      if (validPass) {
        const token = jwt.sign(
          { id: user.id, role: user.role },
          config.passport.secret,
          {
            expiresIn: config.passport.expiresIn,
          }
        );
        res.status(200).send({
          token: token,
          isAuthenticated: true,
          id: user.id,
          role: user.role,
          restaurantID:
            user.restaurants.length > 0 ? user.restaurants[0].id : "",
          message: "User authenticated",
          analytics: user,
        });
      } else {
        res.status(400).send({ message: "Incorrect Email/Password" });
      }
    } else {
      res.status(400).send({ message: "Incorrect Email/Password" });
    }
  } catch {
    res.status(400).send({ message: "User not found" });
  }
});

module.exports = router;
