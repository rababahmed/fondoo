import { extendType, objectType } from "nexus";

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
    t.crud.restaurantPlans();
  },
});

export const RestaurantPlanMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneRestaurantPlan({
      alias: "createRestaurantPlan",
    });
    t.crud.updateOneRestaurantPlan({
      alias: "updateRestaurantPlan",
    });
    t.crud.deleteOneRestaurantPlan({
      alias: "deleteRestaurantPlan",
    });
  },
});
