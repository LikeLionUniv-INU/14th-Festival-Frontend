// 12. 18시 이후 결과 확인창 (아현)

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;

  background-color: transparent;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  padding: 40px 25px 25px 25px;
  border: 1px solid rgba(171, 108, 56, 1);
  box-sizing: border-box;
  width: 311px;
  height: 521.16px;

  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`;

export const Img = styled.img`
  width: 116px;
  height: 116px;
  margin-bottom: 20px;
`;

export const ResultTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  white-space: pre-line;
  line-height: 1.5;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 30px;
  text-align: center;
`;

export const InputBox = styled.input`
  width: 204.55px;
  height: 34px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;

  //사용자가 입력할 글자 스타일
  font-weight: 500;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);

  &::placeholder {
    font-size: 14px;
    color: rgba(166, 166, 166, 1);
  }
`;

export const Button = styled.button`
  min-width: 150px;
  width: auto;
  height: 60px;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  /// 활성화 전
  background-color: #d9d9d9;
  cursor: not-allowed;
  pointer-events: none;
  /// 활성화 후
  &:not(:disabled) {
    background-color: rgb(240, 140, 151);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    pointer-events: auto;
    color: white;
  }
  /// 눌렀을때
  &:active:not(:disabled) {
    background-color: rgb(203, 120, 129);
    box-shadow: inset 2px 5px 5px rgba(0, 0, 0, 0.3);
    transform: scale(0.98);
  }
`;

export const GuideText = styled.div`
  font-size: 10px;
  line-height: 1;
  font-weight: 300;
  color: ${(props) => (props.$isError ? "#bb0a0a" : "rgb(255, 255, 255)")};
  font-weight: ${(props) => (props.$isError ? "700" : "300")};
  margin: 6px 0 22px 0;
  text-align: left;
  width: 207px;
`;
