import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const RestaurantSocial = objectType({
  name: "RestaurantSocial",
  definition(t) {
    t.model.id();
    t.model.facebook();
    t.model.instagram();
    t.model.pinterest();
    t.model.Restaurant();
    t.model.isActive();
  },
});

export const RestaurantSocialQuery = extendType({
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

export const RestaurantSocialMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneRestaurantSocial({
      alias: "createRestaurantSocial",
      shield: or(isAdmin(), isOwner(), isManager()),
    });
    t.crud.updateOneRestaurantSocial({
      alias: "updateRestaurantSocial",
      shield: or(isAdmin(), isOwner(), isManager()),
    });
    t.crud.deleteOneRestaurantSocial({
      alias: "deleteRestaurantSocial",
      shield: or(isAdmin(), isOwner(), isManager()),
    });
  },
});
