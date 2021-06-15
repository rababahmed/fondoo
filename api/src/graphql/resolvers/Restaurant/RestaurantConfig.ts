import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const RestaurantConfig = objectType({
  name: "RestaurantConfig",
  definition(t) {
    t.model.id();
    t.model.primaryColor();
    t.model.secondaryColor();
    t.model.isActive();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const RestaurantConfigQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.restaurantConfig();
    t.crud.restaurantConfigs({
      filtering: true,
      ordering: true,
      pagination: true,
      shield: or(isAdmin()),
    });
  },
});

export const RestaurantConfigMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneRestaurantConfig({
      alias: "createRestaurantConfig",
      shield: or(isAdmin()),
    });
    t.crud.updateOneRestaurantConfig({
      alias: "updateRestaurantConfig",
      shield: or(isAdmin(), isOwner(), isManager()),
    });
    t.crud.deleteOneRestaurantConfig({
      alias: "deleteRestaurantConfig",
      shield: or(isAdmin()),
    });
  },
});
