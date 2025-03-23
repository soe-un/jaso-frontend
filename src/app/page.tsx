"use client";

import AutoLogin from "@/components/AutoLogin";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { auth } = useAuth();

  return (
    <>
      <AutoLogin />
      <main>
        {auth.isLoggedIn ? `${auth.user?.name}님 환영!` : "로그인 필요"}
      </main>
    </>
  );
}
