import create from "zustand";
import { devtools, redux } from "zustand/middleware";

interface User {
  isAuthenticated: boolean;
  userID: number;
  restaurantID: string;
  role: string;
  setUser: (id: number, restaurantID: string, role: string) => void;
  removeUser: () => void;
}

export const useUserStore = create<User>(
  devtools((set) => ({
    isAuthenticated: false,
    userID: 1,
    restaurantID: "e5b22e29-fe36-46e8-8417-468d9c9445d9",
    role: "",
    setUser: (id, restaurantID, role) =>
      set((state) => {
        return {
          ...state,
          userID: id,
          restaurantID: restaurantID,
          role: role,
          isAuthenticated: true,
        };
      }),
    removeUser: () =>
      set((state) => {
        return {
          ...state,
          userID: 0,
          restaurantID: "",
          isAuthenticated: false,
        };
      }),
  }))
);
