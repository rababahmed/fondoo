"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantPlanMutation = exports.RestaurantPlanQuery = exports.RestaurantPlan = void 0;
const nexus_1 = require("nexus");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.RestaurantPlan = (0, nexus_1.objectType)({
    name: "RestaurantPlan",
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.price();
        t.model.isActive();
        t.model.restaurants({ shield: (0, isAuthenticated_1.isAdmin)() });
    },
});
exports.RestaurantPlanQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.crud.restaurantPlan();
        t.crud.restaurantPlans({
            filtering: true,
            ordering: true,
            pagination: true,
            shield: (0, isAuthenticated_1.isAdmin)(),
        });
    },
});
exports.RestaurantPlanMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneRestaurantPlan({
            alias: "createRestaurantPlan",
            shield: (0, isAuthenticated_1.isAdmin)(),
        });
        t.crud.updateOneRestaurantPlan({
            alias: "updateRestaurantPlan",
            shield: (0, isAuthenticated_1.isAdmin)(),
        });
        t.crud.deleteOneRestaurantPlan({
            alias: "deleteRestaurantPlan",
            shield: (0, isAuthenticated_1.isAdmin)(),
        });
    },
});
//# sourceMappingURL=RestaurantPlan.js.map