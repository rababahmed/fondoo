"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isManager = exports.isOwner = exports.isAdmin = exports.isAuthenticated = void 0;
const nexus_shield_1 = require("nexus-shield");
exports.isAuthenticated = nexus_shield_1.generic(nexus_shield_1.ruleType({
    resolve: (_root, _args, ctx) => {
        return !!ctx.user;
    },
}));
exports.isAdmin = nexus_shield_1.generic(nexus_shield_1.chain(exports.isAuthenticated(), nexus_shield_1.ruleType({
    resolve: (_root, _args, ctx) => {
        return ctx.user?.role === "Admin";
    },
})));
exports.isOwner = nexus_shield_1.generic(nexus_shield_1.chain(exports.isAuthenticated(), nexus_shield_1.ruleType({
    resolve: (_root, _args, ctx) => {
        return ctx.user?.role === "Owner";
    },
})));
exports.isManager = nexus_shield_1.generic(nexus_shield_1.chain(exports.isAuthenticated(), nexus_shield_1.ruleType({
    resolve: (_root, _args, ctx) => {
        return ctx.user?.role === "Manager";
    },
})));
//# sourceMappingURL=isAuthenticated.js.map