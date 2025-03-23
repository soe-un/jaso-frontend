"use client";

import { useAuthStore, User } from "@/store/auth";
import { logout as logoutAPI } from "@/api/auth";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const { isLoggedIn, user, accessToken, login, logout } = useAuthStore();
  const router = useRouter();

  const handleLogin = (user: User, token: string) => {
    login(user, token);
  };

  const handleLogout = async () => {
    logoutAPI();
    logout(); // Zustand 상태 초기화
    router.push("/login");
  };

  return {
    auth: { isLoggedIn, user, accessToken },
    login: handleLogin,
    logout: handleLogout,
  };
};
