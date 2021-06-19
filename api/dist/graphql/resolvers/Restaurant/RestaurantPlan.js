"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantPlanMutation = exports.RestaurantPlanQuery = exports.RestaurantPlan = void 0;
const nexus_1 = require("nexus");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.RestaurantPlan = nexus_1.objectType({
    name: "RestaurantPlan",
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.price();
        t.model.isActive();
        t.model.restaurants({ shield: isAuthenticated_1.isAdmin() });
    },
});
exports.RestaurantPlanQuery = nexus_1.extendType({
    type: "Query",
    definition(t) {
        t.crud.restaurantPlan();
        t.crud.restaurantPlans({
            filtering: true,
            ordering: true,
            pagination: true,
            shield: isAuthenticated_1.isAdmin(),
        });
    },
});
exports.RestaurantPlanMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneRestaurantPlan({
            alias: "createRestaurantPlan",
            shield: isAuthenticated_1.isAdmin(),
        });
        t.crud.updateOneRestaurantPlan({
            alias: "updateRestaurantPlan",
            shield: isAuthenticated_1.isAdmin(),
        });
        t.crud.deleteOneRestaurantPlan({
            alias: "deleteRestaurantPlan",
            shield: isAuthenticated_1.isAdmin(),
        });
    },
});
//# sourceMappingURL=RestaurantPlan.js.map