import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ requireCompleted = false }) => {
  // 토큰으로 로그인 여부 검사
  const token = localStorage.getItem("accessToken");

  // 유저 설문 상태 꺼내기
  const isCompleted = localStorage.getItem("isCompleted") === "true";

  // 로그인 안 한 사람 막기
  if (!token) {
    alert("로그인이 필요한 서비스입니다! 🦁");
    return <Navigate to="/" replace />;
  }

  // 설문 안 끝냈는데 결과 페이지 가려는 사람 막기
  if (requireCompleted && !isCompleted) {
    alert("설문을 먼저 완료해야 결과를 볼 수 있습니다! 🦁");
    return <Navigate to="/lets-choice" replace />;
  }

  // 이미 설문 다 했는데 또 설문 페이지 가려는 사람 막기
  if (!requireCompleted && isCompleted) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
