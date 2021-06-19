"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantReviewMutation = exports.RestaurantReviewQuery = exports.RestaurantReview = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.RestaurantReview = nexus_1.objectType({
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
exports.RestaurantReviewQuery = nexus_1.extendType({
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
exports.RestaurantReviewMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneRestaurantReview({
            alias: "createRestaurantReview",
        });
        t.crud.updateOneRestaurantReview({
            alias: "updateRestaurantReview",
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
        });
        t.crud.deleteOneRestaurantReview({
            alias: "deleteRestaurantReview",
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
        });
    },
});
//# sourceMappingURL=RestaurantReview.js.map