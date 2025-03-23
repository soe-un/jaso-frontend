import { create } from "zustand";

export interface User {
  id: string;
  email: string;
  name?: string;
  profileImage?: string;
}

interface AuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  user: User | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  accessToken: null,
  user: null,
  login: (user, token) => set({ isLoggedIn: true, user, accessToken: token }),
  logout: () => set({ isLoggedIn: false, user: null, accessToken: null }),
}));
