import create from "zustand";
import { configurePersist } from "zustand-persist";
import { devtools } from "zustand/middleware";
import omit from "lodash/omit";

interface Site {
  signUpModal: boolean;
  setSignUpModal: (value: boolean) => void;
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

export const useSiteStore = create<Site>(
  devtools(
    // persist(
    //   {
    //     key: "site-store",
    //   },
    (set) => ({
      signUpModal: false,
      setSignUpModal: (value) =>
        set((state) => {
          return {
            ...state,
            signUpModal: value,
          };
        }),
    })
  )
  // )
);
