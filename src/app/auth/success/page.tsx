"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";

export default function AuthSuccessPage() {
  const router = useRouter();
  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      alert("로그인 실패: 토큰 없음");
      router.push("/login");
      return;
    }

    // ✅ 토큰으로 유저 정보 요청
    api
      .get("/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        login(res.data.user, token); // ✅ Zustand에 저장
        router.push("/");
      })
      .catch((err) => {
        console.error("토큰 유효성 검사 실패:", err);
        alert("로그인 실패: 잘못된 토큰");
        router.push("/login");
      });
  }, [login, router]);

  return <div className="p-4">로그인 처리 중입니다... ⏳</div>;
}
