import express from "express";
import passport from "passport";
import { upload } from "../../lib/s3";
const sharp = require("sharp");

const router = express.Router();

const compressed = async (image: any) => {
  await sharp(image).webp({ quality: 20 });
  return image;
};

router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  async (req, res, next) => {
    res.status(200).json({ data: req.file });
  }
);

module.exports = router;
