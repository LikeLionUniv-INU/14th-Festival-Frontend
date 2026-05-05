/**
 * 임의 URL 접근 제어 컴포넌트
 * 
 * 역할:
 * 1. 로그인 여부 확인 (토큰)
 * 2. 현재 시간에 따른 접근 권한 확인
 */

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getPhase } from "../utils/serviceTime";

const ProtectedRoute = ({ allow = [] }) => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    // 토큰이 없으면 로그인 페이지로 이동
    alert("로그인이 필요합니다! 🦁");
    return <Navigate to="/" replace />;
  }

  const phase = getPhase();
  if (!allow.includes(phase)) {
    // 현재 시간대가 허용 목록에 없으면 시간대별 메시지 표시 후 홈으로 이동
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
