// 로그인 여부, 설문 참여 여부, 서비스 시간에 따른 접근 제어 컴포넌트
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getPhase } from "../constants/serviceTime";

const ProtectedRoute = ({ allow = [] }) => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    alert("로그인이 필요합니다! 🦁");
    return <Navigate to="/" replace />;
  }

  const phase = getPhase();
  if (!allow.includes(phase)) {
    const messages = {
      PREPARING: "10-11시는 오픈 준비 중입니다! 🦁",
      SURVEY: "지금은 설문 시간입니다! 🦁",
      AGGREGATING: "17-18시는 결과 집계 중입니다! 🦁",
      RESULT: "지금은 결과 확인 시간입니다! 🦁",
    };
    alert(messages[phase]);
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
