"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemMutation = exports.OrderItemQuery = exports.OrderItem = void 0;
const nexus_1 = require("nexus");
exports.OrderItem = nexus_1.objectType({
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
exports.OrderItemQuery = nexus_1.extendType({
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
exports.OrderItemMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneOrderItem({ alias: "createOrderItem" });
        t.crud.updateOneOrderItem({ alias: "updateOrderItem" });
        t.crud.deleteOneOrderItem({ alias: "deleteOrderItem" });
    },
});
//# sourceMappingURL=OrderItem.js.map