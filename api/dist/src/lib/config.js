"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    passport: {
        secret: `${process.env.JWT_SECRET}`,
        expiresIn: "30 days",
    },
    s3: {},
};
//# sourceMappingURL=config.js.map