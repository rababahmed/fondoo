import * as express from "express";

const userAuthRouter = require("./UserAuth");
const uploadRouter = require("./UploadRouter");
const adminAuthRouter = require("./AdminAuth");

let v1Router = express.Router();

v1Router.use("/user", userAuthRouter);
v1Router.use("/admin", adminAuthRouter);
v1Router.use("/uploads", uploadRouter);
v1Router.use("/uploads", uploadRouter);

export default v1Router;
