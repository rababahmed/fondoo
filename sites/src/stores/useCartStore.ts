import create from "zustand";
import { configurePersist } from "zustand-persist";
import { devtools } from "zustand/middleware";

interface Cart {
  cart: any;
  addToCart: (
    id: string,
    name: string,
    quantity: number,
    price: number
  ) => void;
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

export const useCartStore = create<Cart>(
  devtools(
    // persist(
    //   {
    //     key: "user-store",
    //   },
    (set) => ({
      cart: [],
      addToCart: (id, name, quantity, price) =>
        set((state) => {
          const isPresent = state.cart.find((p: any) => p.id === id);

          if (!isPresent) {
            return {
              ...state,
              cart: [
                ...state.cart,
                { id, name, price: price * quantity, quantity },
              ],
            };
          }

          const updatedCart = state.cart.map((p: any) =>
            p.id === id
              ? {
                  ...p,
                  quantity: p.quantity + quantity,
                  price: price * (p.quantity + quantity),
                }
              : p
          );

          return {
            ...state,
            cart: updatedCart,
          };
        }),
    })
  )
  // )
);
