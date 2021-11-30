import { extendType, objectType } from "nexus";
// import { or } from "nexus-shield";
// import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const Subscription = objectType({
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

export const SubscriptionQuery = extendType({
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

export const SubscriptionMutation = extendType({
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
