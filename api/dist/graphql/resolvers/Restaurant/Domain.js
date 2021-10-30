"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainMutation = exports.DomainQuery = exports.Domain = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.Domain = (0, nexus_1.objectType)({
    name: "Domain",
    definition(t) {
        t.model.id();
        t.model.domain();
        t.model.restaurantConfig();
        t.model.createdAt();
        t.model.updatedAt();
    },
});
exports.DomainQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.crud.domain();
        t.crud.domains({
            filtering: true,
            ordering: true,
            pagination: true,
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)()),
        });
    },
});
exports.DomainMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneDomain({
            alias: "createDomain",
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)()),
        });
        t.crud.updateOneDomain({
            alias: "updateDomain",
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
        });
        t.crud.deleteOneDomain({
            alias: "deleteDomain",
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)()),
        });
    },
});
//# sourceMappingURL=Domain.js.map