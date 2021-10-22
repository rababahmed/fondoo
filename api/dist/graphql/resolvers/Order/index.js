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
exports.OrderItem = exports.Offer = exports.Coupon = exports.OrderMutation = exports.OrderQuery = exports.Order = void 0;
const nanoid_1 = require("nanoid");
const nexus_1 = require("nexus");
const nexus_shield_1 = require("nexus-shield");
const isAuthenticated_1 = require("../../rules/isAuthenticated");
exports.Order = (0, nexus_1.objectType)({
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
        t.model.isAccepted();
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
exports.OrderQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.crud.order();
        t.crud.orders({
            filtering: true,
            ordering: true,
            pagination: true,
            shield: (0, nexus_shield_1.or)((0, isAuthenticated_1.isAdmin)(), (0, isAuthenticated_1.isOwner)(), (0, isAuthenticated_1.isManager)()),
        });
    },
});
exports.OrderMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneOrder({
            alias: "createOrder",
            computedInputs: {
                id: () => (0, nanoid_1.nanoid)(10),
            },
        });
        t.crud.updateOneOrder({ alias: "updateOrder" });
        t.crud.deleteOneOrder({ alias: "deleteOrder" });
    },
});
exports.Coupon = __importStar(require("./Coupon"));
exports.Offer = __importStar(require("./Offer"));
exports.OrderItem = __importStar(require("./OrderItem"));
//# sourceMappingURL=index.js.map