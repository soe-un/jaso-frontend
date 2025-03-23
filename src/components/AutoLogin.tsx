"use client";

import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { refresh } from "@/api/auth";

export default function AutoLogin() {
  const { login, logout } = useAuth();

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

  return null; // 이 컴포넌트는 렌더링 안함
}
