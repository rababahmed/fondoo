import express from "express";
import prisma from "../../PrismaClient";
import * as jwt from "jsonwebtoken";
import { config } from "../../lib/config";
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, phone, restaurantId } =
    req.body;
  const hash = await bcrypt.hash(password, 10);
  const result = await prisma.customer
    .create({
      data: {
        firstName,
        lastName,
        phone,
        email,
        password: hash,
        restaurants: {
          connect: {
            id: restaurantId,
          },
        },
      },
    })
    .then(async (response) => {
      const validPass = await bcrypt.compare(password, response.password);
      if (validPass) {
        const token = jwt.sign(
          { id: response?.id, restaurantId: restaurantId },
          config.passport.secret,
          {
            expiresIn: config.passport.expiresIn,
          }
        );
        res.status(200).send({
          token: token,
          isAuthenticated: true,
          id: response.id,
          message: "User authenticated",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ message: "User already exists" });
    });
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
          const address = await prisma.customerAddress.findFirst({
            where: {
              customerId: customer.id,
            },
          });
          res.status(200).send({
            token: token,
            isAuthenticated: true,
            id: customer.id,
            customerAddressId: address?.id,
            message: "customer authenticated",
          });
        } else {
          res.status(400).send({ message: "Incorrect Email/Password" });
        }
      } else {
        res.status(400).send({ message: "Incorrect Email/Password" });
      }
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
  } catch {
    res.status(400).send({ message: "User not found" });
  }
});

module.exports = router;
