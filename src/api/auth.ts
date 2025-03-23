import { api } from "@/lib/api";
import { User } from "@/store/auth";

export const login = async (email: string, password: string) => {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
};

export const logout = async () => {
  const res = await api.post("/auth/logout", null, { withCredentials: true });
  return res.data;
};

export const refresh = async (): Promise<{
  user: User;
  accessToken: string;
}> => {
  const res = await api.post("/auth/refresh", null, {
    withCredentials: true,
  });

  return res.data;
};
