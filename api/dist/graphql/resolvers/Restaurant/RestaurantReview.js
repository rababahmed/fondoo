"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantReviewMutation = exports.RestaurantReviewQuery = exports.RestaurantReview = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.RestaurantReview = (0, nexus_1.objectType)({
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
exports.RestaurantReviewQuery = (0, nexus_1.extendType)({
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
exports.RestaurantReviewMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneRestaurantReview({
            alias: "createRestaurantReview",
        });
        t.crud.updateOneRestaurantReview({
            alias: "updateRestaurantReview",
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
        });
        t.crud.deleteOneRestaurantReview({
            alias: "deleteRestaurantReview",
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
        });
    },
});
//# sourceMappingURL=RestaurantReview.js.map