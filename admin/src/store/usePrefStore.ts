import create from "zustand";
import { configurePersist } from "zustand-persist";
import { devtools } from "zustand/middleware";

interface User {
  hamburger: boolean;

  toggleHamburger: () => void;
}

export const usePrefStore = create<User>(
  devtools((set) => ({
    hamburger: true,
    toggleHamburger: () =>
      set((state) => {
        return {
          ...state,
          hamburger: !state.hamburger,
        };
      }),
  }))
);
