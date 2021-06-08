import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const RestaurantPlan = objectType({
  name: "RestaurantPlan",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.price();
    t.model.isActive();
    t.model.restaurants();
  },
});

export const RestaurantPlanQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.restaurantPlan();
    t.crud.restaurantPlans({
      shield: or(isAdmin(), isOwner(), isManager()),
      filtering: true,
      ordering: true,
      pagination: true,
    });
  },
});

export const RestaurantPlanMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneRestaurantPlan({
      alias: "createRestaurantPlan",
      shield: or(isAdmin(), isOwner(), isManager()),
    });
    t.crud.updateOneRestaurantPlan({
      alias: "updateRestaurantPlan",
      shield: or(isAdmin(), isOwner(), isManager()),
    });
    t.crud.deleteOneRestaurantPlan({
      alias: "deleteRestaurantPlan",
      shield: or(isAdmin(), isOwner(), isManager()),
    });
  },
});
