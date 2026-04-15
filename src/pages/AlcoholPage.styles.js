// 8. 질문 3 - 주종 (남윤)

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
  }

  margin-bottom: 2dvh;
`;
