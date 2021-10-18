"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantConfigMutation = exports.RestaurantConfigQuery = exports.RestaurantConfig = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.RestaurantConfig = (0, nexus_1.objectType)({
    name: "RestaurantConfig",
    definition(t) {
        t.model.id();
        t.model.domain();
        t.model.primaryColor();
        t.model.secondaryColor();
        t.model.hasDarkNavBg();
        t.model.isActive();
        t.model.createdAt();
        t.model.updatedAt();
        t.model.restaurant();
    },
});
exports.RestaurantConfigQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.crud.restaurantConfig();
        t.crud.restaurantConfigs({
            filtering: true,
            ordering: true,
            pagination: true,
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)()),
        });
    },
});
exports.RestaurantConfigMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneRestaurantConfig({
            alias: "createRestaurantConfig",
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)()),
        });
        t.crud.updateOneRestaurantConfig({
            alias: "updateRestaurantConfig",
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
        });
        t.crud.deleteOneRestaurantConfig({
            alias: "deleteRestaurantConfig",
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)()),
        });
    },
});
//# sourceMappingURL=RestaurantConfig.js.map