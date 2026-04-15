import { create } from 'zustand';
import { persist } from "zustand/middleware";

type UseAuthType = {
    id: number;
    username: string;
    email: string;
    avatar: string;
    fullname: string;
    mobileNumber: string;
    age: number;
    profileComplete: boolean;
    token: string;

    setId: (id: number) => void;
    setUsername: (username: string) => void;
    setEmail: (email: string) => void;
    setAvatar: (avatar: string) => void;
    setFullname: (fullname: string) => void;
    setMobileNumber: (mobileNumber: string) => void;
    setAge: (age: number) => void;
    setProfileComplete: (profileComplete: boolean) => void;
    setToken: (token: string) => void;
    
    logout: () => void;
};

const useAuth = create<UseAuthType>()(
    persist(
        (set) => ({
            id: 0,
            username: "",
            email: "",
            avatar: "",
            fullname: "",
            mobileNumber: "",
            age: 0,
            profileComplete: false,
            token: "",

            setId: (id) => set({ id }),
            setUsername: (username) => set({ username }),
            setEmail: (email) => set({ email }),
            setAvatar: (avatar) => set({ avatar }),
            setFullname: (fullname) => set({ fullname }),
            setMobileNumber: (mobileNumber) => set({ mobileNumber }),
            setAge: (age) => set({ age }),
            setProfileComplete: (profileComplete) => set({ profileComplete }),
            setToken: (token) => set({ token }),
            
            logout: () =>
                set({
                    id: 0,
                    username: "",
                    email: "",
                    avatar: "",
                    fullname: "",
                    mobileNumber: "",
                    age: 0,
                    profileComplete: false,
                    token: "",
                }),
        }),
        { name: "auth-storage" }
    )
);

export default useAuth;