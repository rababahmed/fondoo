"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pm = void 0;
const config_1 = require("./config");
let postmark = require("postmark");
exports.pm = new postmark.ServerClient(config_1.config.postmark.apiKey);
//# sourceMappingURL=postmark.js.map