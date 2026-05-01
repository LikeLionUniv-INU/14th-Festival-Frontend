import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // 토큰 꺼내기
  const token = localStorage.getItem("accessToken");

  //토큰 없을때 알림
  if (!token) {
    alert("로그인이 필요한 서비스입니다! 🦁"); // 안내 메시지
    return <Navigate to="/" replace />;
  }

  // 토큰이 있으면 원래 가려던 페이지를 보여줌
  return <Outlet />;
};

export default ProtectedRoute;
