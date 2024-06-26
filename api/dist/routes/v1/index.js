"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const userAuthRouter = require("./UserAuth");
const customerAuthRouter = require("./CustomerAuth");
const uploadRouter = require("./UploadRouter");
const domainRouter = require("./domainRouter");
const customerEmailRouter = require("./customerEmailRouter");
const restaurantEmailRouter = require("./restaurantEmailRouter");
const paddleSubscriptionsRouter = require("./integrations/paddleSubscriptions");
let v1Router = express.Router();
v1Router.use("/user", userAuthRouter);
v1Router.use("/customer", customerAuthRouter);
v1Router.use("/uploads", uploadRouter);
v1Router.use("/domains", domainRouter);
v1Router.use("/email/customer", customerEmailRouter);
v1Router.use("/email/restaurant", restaurantEmailRouter);
v1Router.use("/integrations/paddle", paddleSubscriptionsRouter);
exports.default = v1Router;
//# sourceMappingURL=index.js.map