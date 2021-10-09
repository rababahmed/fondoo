import { extendType, objectType } from "nexus";

export const Coupon = objectType({
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

export const CouponQuery = extendType({
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

export const CouponMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOneCoupon({ alias: "createCoupon" });
    t.crud.updateOneCoupon({ alias: "updateCoupon" });
    t.crud.deleteOneCoupon({ alias: "deleteCoupon" });
  },
});
