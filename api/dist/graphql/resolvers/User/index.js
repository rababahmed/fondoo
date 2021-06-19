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
exports.UserToken = exports.UserMutation = exports.UserQuery = exports.User = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.User = nexus_1.objectType({
    name: "User",
    definition(t) {
        t.model.id();
        t.model.firstName();
        t.model.lastName();
        t.model.email();
        t.model.phone();
        t.model.role();
        t.model.restaurants();
        t.model.token();
    },
});
exports.UserQuery = nexus_1.extendType({
    type: "Query",
    definition(t) {
        t.crud.user();
        t.crud.users({ shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()) });
    },
});
exports.UserMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneUser({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "createUser",
        });
        t.crud.updateOneUser({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "updateUser",
        });
        t.crud.deleteOneUser({
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
            alias: "deleteUser",
        });
    },
});
exports.UserToken = __importStar(require("./token"));
//# sourceMappingURL=index.js.map