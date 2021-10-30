"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const s3_1 = require("../../lib/s3");
const router = express_1.default.Router();
router.post("/:id", passport_1.default.authenticate("jwt", { session: false }), s3_1.upload.single("image"), async (req, res) => {
    res.status(200).json(req.file);
});
module.exports = router;
//# sourceMappingURL=UploadRouter.js.map