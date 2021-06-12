import * as express from "express";
import passport from "passport";

const userAuthRouter = require("./UserAuth");
const restaurantRouter = require("./RestaurantRouter");
const uploadRouter = require("./UploadRouter");

let v1Router = express.Router();

v1Router.use(
  "/restaurants",
  passport.authenticate("jwt", { session: false }),
  restaurantRouter
);
v1Router.use("/user", userAuthRouter);
v1Router.use("/uploads", uploadRouter);

export default v1Router;
