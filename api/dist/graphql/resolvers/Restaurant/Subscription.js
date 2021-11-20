"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionMutation = exports.SubscriptionQuery = exports.Subscription = void 0;
const nexus_1 = require("nexus");
exports.Subscription = (0, nexus_1.objectType)({
    name: "Subscription",
    definition(t) {
        t.model.id();
        t.model.paddleSubscriptionId();
        t.model.paddleCancelUrl();
        t.model.paddleUpdateUrl();
        t.model.restaurant();
        t.model.restaurantId();
        t.model.restaurantPlan();
        t.model.restaurantPlanId();
        t.model.createdAt();
        t.model.updatedAt();
    },
});
exports.SubscriptionQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.crud.subscription();
        t.crud.subscriptions({
            filtering: true,
            ordering: true,
            pagination: true,
        });
    },
});
exports.SubscriptionMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneSubscription({
            alias: "createSubscription",
        });
        t.crud.updateOneSubscription({
            alias: "updateSubscription",
        });
        t.crud.deleteOneSubscription({
            alias: "deleteSubscription",
        });
    },
});
//# sourceMappingURL=Subscription.js.map