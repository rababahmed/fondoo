import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const Order = objectType({
  name: "Order",
  definition(t) {
    t.model.id();
    t.model.items();
    t.model.address();
    t.model.discount();
    t.model.deliveryCharge();
    t.model.vat();
    t.model.serviceCharge();
    t.model.total();
    t.model.isAccepted();
    t.model.Coupon();
    t.model.couponId();
    t.model.restaurant();
    t.model.restaurantId();
    t.model.Customer();
    t.model.customerId();
  },
});

export const OrderQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.order();
    t.crud.orders({
      filtering: true,
      ordering: true,
      pagination: true,
      shield: or(isAdmin(), isOwner(), isManager()),
    });
  },
});

export const OrderMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneOrder({ alias: "createOrder" });
    t.crud.updateOneOrder({ alias: "updateOrder" });
    t.crud.deleteOneOrder({ alias: "deleteOrder" });
  },
});

export * as Coupon from "./Coupon";
export * as OrderItem from "./OrderItem";
