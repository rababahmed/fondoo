"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMutation = exports.UserQuery = exports.User = void 0;
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
//# sourceMappingURL=index.js.map