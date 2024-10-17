import { create } from "zustand";
import { LoginStoreType } from "../types/global";

export const useLoginStore = create<LoginStoreType>((set) => ({
  isLogged: false,
  setIsLogged: (isLogged: boolean) => set({ isLogged }),
}));
