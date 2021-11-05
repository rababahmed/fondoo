"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemMutation = exports.OrderItemQuery = exports.OrderItem = void 0;
const nexus_1 = require("nexus");
exports.OrderItem = (0, nexus_1.objectType)({
    name: "OrderItem",
    definition(t) {
        t.model.id();
        t.model.product();
        t.model.quantity();
        t.model.total();
        t.model.spiceLevel();
        t.model.productId();
        t.model.order();
        t.model.orderId();
        t.model.restaurant();
        t.model.restaurantId();
    },
});
exports.OrderItemQuery = (0, nexus_1.extendType)({
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
exports.OrderItemMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneOrderItem({ alias: "createOrderItem" });
        t.crud.updateOneOrderItem({ alias: "updateOrderItem" });
        t.crud.deleteOneOrderItem({ alias: "deleteOrderItem" });
    },
});
//# sourceMappingURL=OrderItem.js.map