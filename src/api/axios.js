// baseURL, timeout, 공통 헤더 모음
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// 요청 시 모든 요청에 토큰 자동 첨부
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 응답 에러 처리 (401, 500 등)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // 401: 토큰 만료 또는 무효
    if (error.response?.status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("isCompleted");
      localStorage.removeItem("lastLoggedInId");
      // 로그인 페이지로 리다이렉트 (무한 루프 방지)
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }

    // 네트워크 에러 또는 타임아웃
    if (!error.response) {
      if (error.code === "ECONNABORTED") {
        error.message = "요청 시간이 초과되었습니다. 다시 시도해주세요.";
      } else if (error.message === "Network Error") {
        error.message = "네트워크 연결을 확인해주세요.";
      }
    }

    return Promise.reject(error);
  },
);

export default api;
