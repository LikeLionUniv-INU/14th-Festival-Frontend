// 11-2. <결과 확인 방법> 클릭 시 (지연)

import React, { useState } from "react";
import styled from "styled-components";

// isOpen: 모달이 열려있는지 여부
// onClose: 모달을 닫는 함수

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <Title>{"결과는 어떻게 확인하나요?"}</Title>
        <Content>
          {"1. 오후 6시 이후"}{" "}
          <a
            href="https://www.instagram.com/likelion_inu/"
            target="_blank"
            style={{ color: "#007bff", textDecoration: "underline" }}
          >
            멋사 인스타 스토리
          </a>
          {
            " 확인\n 2. 결과 확인 페이지 접속\n 3. 매칭 성공 화면에서 상대방 ID 확인\n 4. 나와 잘 맞는 동물친구와 자유롭게\n"
          }
          {"\u00a0\u00a0\u00a0"}
          {"연락 시작하기"}
          <Info>{"오후 6시, 설레는 소식을 기대해 주세요!"}</Info>
        </Content>
        <ButtonWrapper>
          <CloseButton onClick={onClose}>확인</CloseButton>
        </ButtonWrapper>
      </ModalBox>
    </Overlay>
  );
};

export default Modal;

// --- 스타일 ---
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  background-color: #ffffff;
  width: 85%;
  max-width: 342px;
  height: auto;
  min-height: 294px;
  border-radius: 12px;
  padding: 32px 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: slideDown 0.2s ease-out;

  @keyframes slideDown {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  text-align: center;
  white-space: pre-wrap;
`;

const Content = styled.p`
  font-size: 16px;
  color: rgb(00, 00, 00);
  margin-top: 28px;
  white-space: pre-line;
  line-height: 1.8;
`;

const Info = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: rgb(91, 91, 91);
  margin-top: 14px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 18px;
`;

const CloseButton = styled.button`
  width: 122px;
  height: 53px;
  background-color: #000000;
  color: white;
  border-radius: 12px;
  font-size: 22px;
  padding: 14px 40px;
`;
