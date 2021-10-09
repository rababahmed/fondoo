import create from "zustand";
import { configurePersist } from "zustand-persist";
import { devtools } from "zustand/middleware";
import omit from "lodash/omit";

interface User {
  isAuthenticated: boolean;
  userID: string;
  token: string;
  setUser: (id: string, token: string) => void;
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
    // persist(
    //   {
    //     key: "user-store",
    //   },
    (set) => ({
      isAuthenticated: false,
      userID: "",
      token: "",
      role: "",
      setUser: (id, token) =>
        set((state) => {
          return {
            ...state,
            userID: id,
            token: token,
            isAuthenticated: true,
          };
        }),
      removeUser: () =>
        set((state) => {
          return {
            ...state,
            userID: "",
            token: "",
            isAuthenticated: false,
          };
        }),
    })
  )
  // )
);
