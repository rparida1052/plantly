import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist,createJSONStorage } from "zustand/middleware";

type UserStore = {
    hasOnboarded:boolean;
    toggleOnboarding:() => void;
}

export const useUserStore = create(
  persist<UserStore>((set) => ({
    hasOnboarded: false,
    toggleOnboarding: () => {
      set((state) => {
        console.log("state value is ", state);
        return {
          ...state,
          hasOnboarded: !state.hasOnboarded,
        };
      });
    },
  }),{
    name:"user-storage",
    storage:createJSONStorage(()=>AsyncStorage)
  })
);