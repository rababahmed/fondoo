import create from "zustand";
import { configurePersist } from "zustand-persist";
import { devtools } from "zustand/middleware";

interface User {
  isAuthenticated: boolean;
  userID: string;
  restaurantID: string;
  role: string;
  token: string;
  setUser: (id: string, role: string, token: string) => void;
  setRestaurant: (restaurant: string) => void;
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
        restaurantID: "",
        role: "",
        setUser: (id, role, token) =>
          set((state) => {
            return {
              ...state,
              userID: id,
              role: role,
              token: token,
              isAuthenticated: true,
            };
          }),
        setRestaurant: (restaurant) =>
          set((state) => {
            return {
              ...state,
              restaurantID: restaurant,
            };
          }),
        removeUser: () =>
          set((state) => {
            return {
              ...state,
              userID: "",
              role: "",
              restaurantID: "",
              token: "",
              isAuthenticated: false,
            };
          }),
      })
    )
  )
);
