"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantSocialMutation = exports.RestaurantSocialQuery = exports.RestaurantSocial = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.RestaurantSocial = (0, nexus_1.objectType)({
    name: "RestaurantSocial",
    definition(t) {
        t.model.id();
        t.model.network();
        t.model.url();
        t.model.restaurant();
        t.model.isActive();
    },
});
exports.RestaurantSocialQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.crud.restaurantSocial();
        t.crud.restaurantSocials({
            filtering: true,
            ordering: true,
            pagination: true,
        });
    },
});
exports.RestaurantSocialMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneRestaurantSocial({
            alias: "createRestaurantSocial",
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
        });
        t.crud.updateOneRestaurantSocial({
            alias: "updateRestaurantSocial",
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
        });
        t.crud.deleteOneRestaurantSocial({
            alias: "deleteRestaurantSocial",
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
        });
    },
});
//# sourceMappingURL=RestaurantSocial.js.map