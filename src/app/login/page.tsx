"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login as loginAPI } from "@/api/auth";
import { useAuthStore } from "@/store/auth";
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
    </div>
  );
}
