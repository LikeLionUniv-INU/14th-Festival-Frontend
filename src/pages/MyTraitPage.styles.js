// 7. 질문 2 - 관심사 (남윤)

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
`;

export const ButtonContainer = styled.button`
  button {
    background-color: ${(props) => (props.$active ? "" : "#D9D9D9 !important")};
    color: ${(props) => (props.$active ? "#ffffff" : "#000000 !important")};
  };

  margin-bottom: 2dvh;
`;
