"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailgun = void 0;
const config_1 = require("./config");
const mailgun_js_1 = __importDefault(require("mailgun-js"));
exports.mailgun = new mailgun_js_1.default({
    apiKey: config_1.config.mailgun.apiKey,
    domain: config_1.config.mailgun.domain,
});
//# sourceMappingURL=mailgun.js.map