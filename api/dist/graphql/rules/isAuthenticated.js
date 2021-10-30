"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isManager = exports.isOwner = exports.isAdmin = exports.isAuthenticated = void 0;
const nexus_shield_1 = require("nexus-shield");
exports.isAuthenticated = (0, nexus_shield_1.generic)((0, nexus_shield_1.ruleType)({
    resolve: (_root, _args, ctx) => {
        return !!ctx.user;
    },
}));
exports.isAdmin = (0, nexus_shield_1.generic)((0, nexus_shield_1.chain)((0, exports.isAuthenticated)(), (0, nexus_shield_1.ruleType)({
    resolve: (_root, _args, ctx) => {
        return ctx.user?.role === "Admin";
    },
})));
exports.isOwner = (0, nexus_shield_1.generic)((0, nexus_shield_1.chain)((0, exports.isAuthenticated)(), (0, nexus_shield_1.ruleType)({
    resolve: (_root, _args, ctx) => {
        return ctx.user?.role === "Owner";
    },
})));
exports.isManager = (0, nexus_shield_1.generic)((0, nexus_shield_1.chain)((0, exports.isAuthenticated)(), (0, nexus_shield_1.ruleType)({
    resolve: (_root, _args, ctx) => {
        return ctx.user?.role === "Manager";
    },
})));
//# sourceMappingURL=isAuthenticated.js.map