"use client";

import { refresh } from "@/api/auth";
import LogoutButton from "@/components/LogoutButton";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

export default function Home() {
  const { auth, login, logout } = useAuth();

  useEffect(() => {
    refresh()
      .then(({ user, accessToken }) => {
        login(user, accessToken);
        console.log("✅ 자동 로그인 성공:", user.email);
      })
      .catch(() => {
        logout();
        console.log("🚫 자동 로그인 실패: refresh token 없거나 만료됨");
      });
  }, []);

  return (
    <>
      <main>
        {auth.isLoggedIn && <LogoutButton />}
        {auth.isLoggedIn ? `${auth.user?.name}님 환영!` : "로그인 필요"}
      </main>
    </>
  );
}
