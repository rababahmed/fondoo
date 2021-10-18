import create from "zustand";
import { configurePersist } from "zustand-persist";
import { devtools } from "zustand/middleware";
import omit from "lodash/omit";

interface Checkout {
  fulfilmentType: string;
  deliveryZoneId: string;
  deliveryFee: number;
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
      },
      (set) => ({
        fulfilmentType: "",
        deliveryZoneId: "",

        deliveryFee: 0,
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
              deliveryFee: fee,
            };
          }),
      })
    )
  )
);
