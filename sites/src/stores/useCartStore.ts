import create from "zustand";
import { configurePersist } from "zustand-persist";
import { devtools } from "zustand/middleware";
import omit from "lodash/omit";

interface Cart {
  cart: any;
  decreaseQuantity: (id: string) => void;
  increaseQuantity: (id: string) => void;
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
      decreaseQuantity: (id) =>
        set((state) => {
          const isQuantityMinimum = state.cart.find((p: any) => p.quantity < 2);

          if (isQuantityMinimum) {
            const reducedCart = state.cart.filter((p: any) => p.id !== id);

            return {
              ...state,
              cart: reducedCart,
            };
          }

          const updatedCart = state.cart.map((p: any) =>
            p.id === id
              ? {
                  ...p,
                  quantity: p.quantity - 1,
                  total: p.total - p.price,
                }
              : p
          );

          return {
            ...state,
            cart: updatedCart,
          };
        }),
      increaseQuantity: (id) =>
        set((state) => {
          const isPresent = state.cart.find((p: any) => p.id === id);
          if (!isPresent) {
            return {
              ...state,
            };
          }
          const updatedCart = state.cart.map((p: any) =>
            p.id === id
              ? {
                  ...p,
                  quantity: p.quantity + 1,
                  total: p.total + p.price,
                }
              : p
          );

          return {
            ...state,
            cart: updatedCart,
          };
        }),
      addToCart: (id, name, quantity, price) =>
        set((state) => {
          const isPresent = state.cart.find((p: any) => p.id === id);

          if (!isPresent) {
            return {
              ...state,
              cart: [
                ...state.cart,
                { id, name, price, total: price * quantity, quantity },
              ],
            };
          }

          const updatedCart = state.cart.map((p: any) =>
            p.id === id
              ? {
                  ...p,
                  quantity: p.quantity + quantity,
                  total: price * (p.quantity + quantity),
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
