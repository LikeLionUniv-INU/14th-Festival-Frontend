// 6. 질문1 - 본인 동물상 (남윤)

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
  }

  margin-bottom: 2dvh;
`;

export const Anything = styled.span`
  color: ${(props) => (props.$selected ? "#000" : "#b5b5b5")};
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
  pointer-events: auto;
  margin-bottom: 14.2px;
`;
