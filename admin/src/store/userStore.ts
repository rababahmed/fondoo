import create from "zustand";
import { devtools, redux } from "zustand/middleware";

interface User {
  isAuthenticated: Boolean;
  userID: number;
  setUser: (id: number) => void;
}

export const useUserStore = create<User>(
  devtools((set) => ({
    isAuthenticated: false,
    userID: 1,
    setUser: (id) =>
      set((state) => {
        return {
          ...state,
          userID: id,
          isAuthenticated: true,
        };
      }),
  }))
);
