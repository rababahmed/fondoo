"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const config_1 = require("../../lib/config");
const router = express_1.default.Router();
router.get("/", async (_, res) => {
    try {
        const domainData = await axios_1.default.get(`${config_1.vercel.URL}` + "/v8/projects/" + config_1.vercel.PROJECT_ID + "/domains/", {
            headers: {
                Authorization: "Bearer " + config_1.vercel.TOKEN,
            },
        });
        res.status(200).send(domainData.data);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
});
router.post("/:domain/", async (req, res) => {
    try {
        const { domain } = req.params;
        const domainData = await axios_1.default.post(`${config_1.vercel.URL}` + "/v8/projects/" + config_1.vercel.PROJECT_ID + "/domains/", {
            name: domain,
        }, {
            headers: {
                Authorization: "Bearer " + config_1.vercel.TOKEN,
            },
        });
        res.status(200).send(domainData.data);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});
module.exports = router;
//# sourceMappingURL=domainRouter.js.map