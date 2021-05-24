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
    restaurantID: "5740ab09-e5fc-47f9-b1bd-1287b8a4cdee",
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
