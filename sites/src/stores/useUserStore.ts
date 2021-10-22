import create from "zustand";
import { configurePersist } from "zustand-persist";
import { devtools } from "zustand/middleware";
import omit from "lodash/omit";

interface User {
  isAuthenticated: boolean;
  userID: string;
  token: string;
  addressId: string;
  recentOrderId: string;
  setRecentOrderId: (id: string) => void;
  setUser: (id: string, token: string, customerAddressId: string) => void;
  setAddress: (id: string) => void;
  removeUser: () => void;
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

export const useUserStore = create<User>(
  devtools(
    persist(
      {
        key: "user-store",
      },
      (set) => ({
        isAuthenticated: false,
        userID: "",
        token: "",
        role: "",
        addressId: "",
        recentOrderId: "",
        setRecentOrderId: (id) =>
          set((state) => {
            return {
              ...state,
              recentOrderId: id,
            };
          }),
        setUser: (id, token, customerAddressId) =>
          set((state) => {
            return {
              ...state,
              userID: id,
              token: token,
              isAuthenticated: true,
              customerAddressId: customerAddressId,
            };
          }),
        setAddress: (id) =>
          set((state) => {
            return {
              ...state,
              addressId: id,
            };
          }),
        removeUser: () =>
          set((state) => {
            return {
              ...state,
              userID: "",
              token: "",
              addressId: "",
              isAuthenticated: false,
            };
          }),
      })
    )
  )
);
