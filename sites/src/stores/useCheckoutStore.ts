import create from "zustand";
import { configurePersist } from "zustand-persist";
import { devtools } from "zustand/middleware";
import omit from "lodash/omit";

interface Checkout {
  fulfilmentType: string;
  deliveryZoneId: string;
  deliveryCharge: number;
  discount: number;
  vat: number;
  serviceCharge: number;
  total: number;
  isPreOrder: boolean;
  isAccepted: boolean;
  handleDiscountChange: (value: any) => void;
  handleVatChange: (value: any) => void;
  handleServiceChargeChange: (value: any) => void;
  handleTotalChange: (value: any) => void;
  handleIsPreOrderChange: (value: any) => void;
  handleIsAcceptedChange: (value: any) => void;
  setFulfilmentType: (fulfilmentType: string) => void;
  setDelivery: (id: string, fee: number) => void;
}

const isBrowser = typeof window !== "undefined";

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem({ _key, value }: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const { persist, purge } = configurePersist({
  storage: isBrowser ? localStorage : createNoopStorage(),
  rootKey: "root",
});

export const useCheckoutStore = create<Checkout>(
  devtools(
    persist(
      {
        key: "checkout-store",
        denylist: ["discount"],
      },
      (set) => ({
        fulfilmentType: "",
        deliveryZoneId: "",
        deliveryCharge: 0,
        discount: 0,
        vat: 0,
        serviceCharge: 0,
        total: 0,
        isPreOrder: false,
        isAccepted: false,
        handleDiscountChange: (value) =>
          set((state) => {
            return {
              ...state,
              discount: value,
            };
          }),
        handleVatChange: (value) =>
          set((state) => {
            return {
              ...state,
              vat: value,
            };
          }),
        handleServiceChargeChange: (value) =>
          set((state) => {
            return {
              ...state,
              serviceCharge: value,
            };
          }),
        handleTotalChange: (value) =>
          set((state) => {
            return {
              ...state,
              total: value,
            };
          }),
        handleIsPreOrderChange: (value) =>
          set((state) => {
            return {
              ...state,
              isPreOrder: value,
            };
          }),
        handleIsAcceptedChange: (value) =>
          set((state) => {
            return {
              ...state,
              isAccepted: value,
            };
          }),
        setFulfilmentType: (fulfilmentType) =>
          set((state) => {
            return {
              ...state,
              fulfilmentType: fulfilmentType,
            };
          }),
        setDelivery: (id, fee) =>
          set((state) => {
            return {
              ...state,
              deliveryZoneId: id,
              deliveryCharge: fee,
            };
          }),
      })
    )
  )
);
