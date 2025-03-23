"use client";

import { useAuth } from "@/hooks/useAuth";

export default function LogoutButton() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <button onClick={handleLogout} className="text-red-500">
      로그아웃
    </button>
  );
}
