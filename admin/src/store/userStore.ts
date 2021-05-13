import create from "zustand";
import { devtools, redux } from "zustand/middleware";

interface user {
  id: string;
  fullName: string;
  email: string;
  token: string;
  setId: () => void;
}

export const useUserStore = create<user>(
  devtools((set) => ({
    id: 1,
    fullName: "",
    email: "",
    token: "",
    setId: () => set((state) => ({ id: `${userID}` })),
  }))
);
