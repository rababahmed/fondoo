import * as express from "express";

const userAuthRouter = require("./UserAuth");
const customerAuthRouter = require("./CustomerAuth");
const uploadRouter = require("./UploadRouter");
// const restaurantRouter = require("./restaurantRouter");
const domainRouter = require("./domainRouter");

let v1Router = express.Router();

v1Router.use("/user", userAuthRouter);
v1Router.use("/customer", customerAuthRouter);
v1Router.use("/uploads", uploadRouter);
v1Router.use("/domains", domainRouter);
// v1Router.use("/restaurant", restaurantRouter);

export default v1Router;
