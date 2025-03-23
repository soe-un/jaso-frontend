"use client";

import { useAuthStore } from "@/store/auth";

export const useAuth = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);
  const accessToken = useAuthStore((state) => state.accessToken);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  return {
    auth: { isLoggedIn, user, accessToken },
    login,
    logout,
  };
};
