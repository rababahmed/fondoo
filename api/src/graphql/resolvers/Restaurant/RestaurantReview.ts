import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const RestaurantReview = objectType({
  name: "RestaurantReview",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.description();
    t.model.rating();
    t.model.isActive();
    t.model.customer();
    t.model.restaurant();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

export const RestaurantReviewQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.restaurantReview();
    t.crud.restaurantReviews({
      filtering: true,
      ordering: true,
      pagination: true,
    });
  },
});

export const RestaurantReviewMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneRestaurantReview({
      alias: "createRestaurantReview",
    });
    t.crud.updateOneRestaurantReview({
      alias: "updateRestaurantReview",
      shield: or(isAdmin(), isOwner(), isManager()),
    });
    t.crud.deleteOneRestaurantReview({
      alias: "deleteRestaurantReview",
      shield: or(isAdmin(), isOwner(), isManager()),
    });
  },
});
