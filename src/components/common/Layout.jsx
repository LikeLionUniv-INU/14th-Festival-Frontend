// 모바일 레이아웃 설정
import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Container>
      <AppBox>{children}</AppBox>
    </Container>
  );
};

export default Layout;

// 전체 배경
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: var(--app-height);
  background-color: #f0f0f0;
`;

// 실제 앱 화면
const AppBox = styled.div`
  width: 100%;
  max-width: 430px;
  height: 100%; /* 부모 높이(화면 전체)를 꽉 채움 */

  background-color: #fbfbfb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;
