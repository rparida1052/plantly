import { create } from "zustand";

type UserStore = {
    hasOnboarded:boolean;
    toggleOnboarding:() => void;
}

export const useUserStore = create<UserStore>((set)=>({
    hasOnboarded:false,
    toggleOnboarding:()=>{
        set((state)=>{
            console.log("state value is ",state)
            return {
                ...state,
                hasOnboarded:!state.hasOnboarded
            }
        })
    }
}))