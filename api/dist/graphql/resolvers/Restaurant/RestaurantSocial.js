"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantSocialMutation = exports.RestaurantSocialQuery = exports.RestaurantSocial = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.RestaurantSocial = nexus_1.objectType({
    name: "RestaurantSocial",
    definition(t) {
        t.model.id();
        t.model.facebook();
        t.model.instagram();
        t.model.pinterest();
        t.model.restaurant();
        t.model.isActive();
    },
});
exports.RestaurantSocialQuery = nexus_1.extendType({
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
exports.RestaurantSocialMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneRestaurantSocial({
            alias: "createRestaurantSocial",
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
        });
        t.crud.updateOneRestaurantSocial({
            alias: "updateRestaurantSocial",
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
        });
        t.crud.deleteOneRestaurantSocial({
            alias: "deleteRestaurantSocial",
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
        });
    },
});
//# sourceMappingURL=RestaurantSocial.js.map