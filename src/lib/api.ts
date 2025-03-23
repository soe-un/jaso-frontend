import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000", // 백엔드 주소
  withCredentials: true, // ✅ 쿠키 포함 요청
});
