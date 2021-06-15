import { extendType, objectType } from "nexus";
import { isAdmin } from "../../rules/isAuthenticated";

export const RestaurantPlan = objectType({
  name: "RestaurantPlan",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.price();
    t.model.isActive();
    t.model.restaurants({ shield: isAdmin() });
  },
});

export const RestaurantPlanQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.restaurantPlan();
    t.crud.restaurantPlans({
      filtering: true,
      ordering: true,
      pagination: true,
      shield: isAdmin(),
    });
  },
});

export const RestaurantPlanMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneRestaurantPlan({
      alias: "createRestaurantPlan",
      shield: isAdmin(),
    });
    t.crud.updateOneRestaurantPlan({
      alias: "updateRestaurantPlan",
      shield: isAdmin(),
    });
    t.crud.deleteOneRestaurantPlan({
      alias: "deleteRestaurantPlan",
      shield: isAdmin(),
    });
  },
});
