import * as express from "express";

const userAuthRouter = require("./UserAuth");
const restaurantRouter = require("./RestaurantRouter");

let router = express.Router();

router.use("/restaurants", restaurantRouter);
router.use("/user", userAuthRouter);

export = router;
