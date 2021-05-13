import create from "zustand";
import { devtools, redux } from "zustand/middleware";

interface user {
  id: number;
  fullName: string;
  email: string;
  token: string;
}

export const useUserStore = create<user>(
  devtools((set) => ({
    id: 1,
    fullName: "",
    email: "",
    token: "",
  }))
);
