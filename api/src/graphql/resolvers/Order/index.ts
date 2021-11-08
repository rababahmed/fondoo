import { nanoid } from "nanoid";
import { extendType, objectType } from "nexus";
import { or } from "nexus-shield";
import { isAdmin, isManager, isOwner } from "../../rules/isAuthenticated";

export const Order = objectType({
  name: "Order",
  definition(t) {
    t.model.id();
    t.model.items();
    t.model.fulfilmentType();
    t.model.deliveryZone();
    t.model.address();
    t.model.discount();
    t.model.deliveryCharge();
    t.model.vat();
    t.model.serviceCharge();
    t.model.total();
    t.model.status();
    t.model.isPreOrder();
    t.model.isViewed();
    t.model.coupon();
    t.model.couponId();
    t.model.restaurant();
    t.model.restaurantId();
    t.model.customer();
    t.model.customerId();
    t.model.deliveryZoneId();
    t.model.createdAt();
    t.model.updatedAt();
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
    t.crud.createOneOrder({
      alias: "createOrder",
      computedInputs: {
        id: () => nanoid(10),
      },
    });
    t.crud.updateOneOrder({ alias: "updateOrder" });
    t.crud.deleteOneOrder({ alias: "deleteOrder" });
    t.crud.deleteManyOrder({ alias: "deleteOrders" });
  },
});

export * as Coupon from "./Coupon";
export * as Offer from "./Offer";
export * as OrderItem from "./OrderItem";
