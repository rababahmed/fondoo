import { extendType, objectType } from "nexus";

export const Coupon = objectType({
  name: "Coupon",
  definition(t) {
    t.model.id();
    t.model.code();
    t.model.discount();
    t.model.value();
    t.model.description();
    t.model.orders();
  },
});

export const CouponQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.coupon();
    t.crud.coupons();
  },
});

export const CouponMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneCoupon({ alias: "createCoupon" });
    t.crud.updateOneCoupon({ alias: "updateCoupon" });
    t.crud.deleteOneCoupon({ alias: "deleteCoupon" });
  },
});
