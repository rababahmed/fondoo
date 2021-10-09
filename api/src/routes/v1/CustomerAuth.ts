import express from "express";
import prisma from "../../PrismaClient";
import * as jwt from "jsonwebtoken";
import { config } from "../../lib/config";
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone, restaurantID } =
      req.body;
    const hash = await bcrypt.hash(password, 10);
    if (restaurantID) {
      const result = await prisma.customer.create({
        data: {
          firstName,
          lastName,
          phone,
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
        .send({ message: "User signed up succesfully", data: result.id });
    } else {
      const result = await prisma.customer.create({
        data: {
          firstName,
          lastName,
          phone,
          email,
          password: hash,
        },
      });
      res
        .status(200)
        .send({ message: "User signed up succesfully", data: result.id });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "Error signing up user" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, phone, password, restaurantId } = req.body;
    if (email) {
      const customer = await prisma.customer.findUnique({
        where: {
          email,
        },
      });
      if (customer) {
        const validPass = await bcrypt.compare(password, customer.password);
        if (validPass) {
          const token = jwt.sign(
            { id: customer.id, restaurantId: restaurantId },
            config.passport.secret,
            {
              expiresIn: config.passport.expiresIn,
            }
          );
          res.status(200).send({
            token: token,
            isAuthenticated: true,
            id: customer.id,
            message: "customer authenticated",
          });
        } else {
          res.status(400).send({ message: "Incorrect Email/Password" });
        }
      } else {
        res.status(400).send({ message: "Incorrect Email/Password" });
      }
      if (phone) {
        const customer = await prisma.customer.findUnique({
          where: {
            phone,
          },
        });
        if (customer) {
          const validPass = await bcrypt.compare(password, customer.password);
          if (validPass) {
            const token = jwt.sign(
              { id: customer.id, restaurantId: restaurantId },
              config.passport.secret,
              {
                expiresIn: config.passport.expiresIn,
              }
            );
            res.status(200).send({
              token: token,
              isAuthenticated: true,
              id: customer.id,
              message: "User authenticated",
            });
          } else {
            res.status(400).send({ message: "Incorrect Email/Password" });
          }
        } else {
          res.status(400).send({ message: "Incorrect Email/Password" });
        }
      }
    }
  } catch {
    res.status(400).send({ message: "User not found" });
  }
});

module.exports = router;