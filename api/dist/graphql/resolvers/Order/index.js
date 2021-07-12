"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = exports.Coupon = exports.OrderMutation = exports.OrderQuery = exports.Order = void 0;
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.Order = nexus_1.objectType({
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
exports.OrderQuery = nexus_1.extendType({
    type: "Query",
    definition(t) {
        t.crud.order();
        t.crud.orders({
            filtering: true,
            ordering: true,
            pagination: true,
            shield: nexus_shield_1.or(isAuthenticated_1.isAdmin(), isAuthenticated_1.isOwner(), isAuthenticated_1.isManager()),
        });
    },
});
exports.OrderMutation = nexus_1.extendType({
    type: "Mutation",
    definition(t) {
        t.crud.createOneOrder({ alias: "createOrder" });
        t.crud.updateOneOrder({ alias: "updateOrder" });
        t.crud.deleteOneOrder({ alias: "deleteOrder" });
    },
});
exports.Coupon = __importStar(require("./Coupon"));
exports.OrderItem = __importStar(require("./OrderItem"));
//# sourceMappingURL=index.js.map