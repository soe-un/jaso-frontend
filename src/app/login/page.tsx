"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login as loginAPI } from "@/api/auth";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const { user, accessToken } = await loginAPI(email, password);
      login(user, accessToken);
      router.push("/");
    } catch {
      alert("로그인 실패!");
    }
  };

  const handleKakaoLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!;
    const redirectUri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI!;
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;

    window.location.href = kakaoAuthUrl;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">로그인</h2>
      <input
        className="border p-2 my-2 block"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
      />
      <input
        className="border p-2 my-2 block"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="비밀번호"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={handleLogin}
      >
        로그인
      </button>
      <hr className="my-6" />

      <div className="flex flex-col gap-2">
        <button
          onClick={handleKakaoLogin}
          className="bg-yellow-300 text-black px-4 py-2 rounded"
        >
          🟡 카카오로 로그인
        </button>

        <button
          onClick={() => {
            window.location.href = "http://localhost:5000/auth/google";
          }}
          className="bg-white text-black border px-4 py-2 rounded"
        >
          🔴 구글로 로그인
        </button>
      </div>
    </div>
  );
}
