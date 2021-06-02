import * as express from "express";

const userAuthRouter = require("./UserAuth");
const restaurantRouter = require("./RestaurantRouter");

let v1Router = express.Router();

v1Router.use("/restaurants", restaurantRouter);
v1Router.use("/user", userAuthRouter);

export default v1Router;
