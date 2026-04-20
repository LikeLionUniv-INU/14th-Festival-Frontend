// 6. 질문1 - 본인 동물상 (남윤)

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
`;

export const ButtonContainer = styled.div`
  width: 90%;
  margin-bottom: 2dvh;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Anything = styled.span`
  color: ${(props) => (props.$selected ? "#f24859" : "#b5b5b5")};
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
  pointer-events: auto;
  margin-bottom: 14.2px;
`;
