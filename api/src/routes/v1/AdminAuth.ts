import express from "express";
import prisma from "../../PrismaClient";
import passport from "passport";
import { isAdmin } from "../../lib/isAdmin";
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post(
  "/signup",
  isAdmin,
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { firstName, lastName, email, password, phone, role } = req.body;
      const hash = await bcrypt.hash(password, 10);
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
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: "Error creating user" });
    }
  }
);

module.exports = router;
