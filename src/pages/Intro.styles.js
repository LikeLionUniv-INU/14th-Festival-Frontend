// 1. 입장 화면 (지연)

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  background: linear-gradient(
    180deg,
    rgba(255, 249, 231, 1) 0%,
    rgba(255, 249, 231, 1) 42.5%,
    rgba(240, 140, 151, 0.25) 100%
  );
`;

export const Info = styled.p`
  white-space: pre-line;
  text-align: center;
  margin-top: 1.2vh;
  margin-bottom: 9.6vh;

  font-size: 14px;
  color: rgb(76, 76, 76);
`;

export const Logo = styled.img`
  margin-bottom: 17vh;
  margin-left: 1vh;
`;

export const Intro_Button = styled.button`
  width: 30vh;
  height: 7vh;
  border: none;
  border-radius: 12px;

  background-color: rgb(125, 78, 40);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  font-size: 24px;
  color: white;

  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;

  &:active {
    background-color: rgb(183, 124, 76);
    box-shadow: inset 2px 5px 5px rgba(0, 0, 0, 0.3);
  }
`;
