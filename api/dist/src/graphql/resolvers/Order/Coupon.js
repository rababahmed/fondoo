"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponMutation = exports.CouponQuery = exports.Coupon = void 0;
const nexus_1 = require("nexus");
exports.Coupon = (0, nexus_1.objectType)({
    name: "Coupon",
    definition(t) {
        t.model.id();
        t.model.code();
        t.model.discount();
        t.model.value();
        t.model.description();
        t.model.image();
        t.model.startDate();
        t.model.endDate();
        t.model.restaurant();
        t.model.orders();
    },
});
exports.CouponQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.crud.coupon();
        t.crud.coupons({
            filtering: true,
            ordering: true,
            pagination: true,
        });
    },
});
exports.CouponMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.crud.createOneCoupon({ alias: "createCoupon" });
        t.crud.updateOneCoupon({ alias: "updateCoupon" });
        t.crud.deleteOneCoupon({ alias: "deleteCoupon" });
    },
});
//# sourceMappingURL=Coupon.js.map