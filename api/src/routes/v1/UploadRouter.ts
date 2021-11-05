import express from "express";
import passport from "passport";
import { upload } from "../../lib/s3";

const router = express.Router();

router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  async (req: any, res: any) => {
    res.status(200).json(req.file);
  }
);

module.exports = router;
