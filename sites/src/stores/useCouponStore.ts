import create from "zustand";
import { configurePersist } from "zustand-persist";
import { devtools } from "zustand/middleware";
import omit from "lodash/omit";

interface Coupon {
  couponId: string;
  discountType: string;
  discountValue: number;
  setDiscount: (
    couponId: string,
    discountType: string,
    discountValue: number
  ) => void;
  removeCoupon: () => void;
}

export const useCouponStore = create<Coupon>(
  devtools((set) => ({
    couponId: "",
    discountType: "",
    discountValue: 0,
    setDiscount: (couponId, discountType, discountValue) =>
      set((state) => {
        return {
          ...state,
          couponId: couponId,
          discountType: discountType,
          discountValue: discountValue,
        };
      }),
    removeCoupon: () =>
      set((state) => {
        return {
          ...state,
          couponId: "",
          discountType: "",
          discountValue: 0,
        };
      }),
  }))
);
