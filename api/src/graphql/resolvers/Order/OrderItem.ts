import { extendType, objectType } from "nexus";

export const OrderItem = objectType({
  name: "OrderItem",
  definition(t) {
    t.model.id();
    t.model.product();
    t.model.quantity();
    t.model.total();
    t.model.spiceLevel();
    t.model.productId();
    t.model.Order();
    t.model.orderId();
    t.model.Restaurant();
    t.model.restaurantId();
  },
});

export const OrderItemQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.orderItem();
    t.crud.orderItems({
      filtering: true,
      ordering: true,
      pagination: true,
    });
  },
});

export const OrderItemMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneOrderItem({ alias: "createOrderItem" });
    t.crud.updateOneOrderItem({ alias: "updateOrderItem" });
    t.crud.deleteOneOrderItem({ alias: "deleteOrderItem" });
  },
});
