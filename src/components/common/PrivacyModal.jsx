import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// isOpen: 모달이 열려있는지 여부
// onClose: 모달을 닫는 함수
// title: 모달 상단 제목
// children: 모달 창 안에 들어갈 내용물
const PrivacyModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleAgree = () => {
    onClose();
    navigate("/jiyeon/lets-choice");
  };

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        {
          <Title>
            {"안전한 서비스를 위해\n 개인 정보 활용 동의가 필요해요"}
          </Title>
        }
        <Content>
          {"입력하신 정보는 서비스 이용 시에만 사용되며,\n 이후 삭제됩니다."}
        </Content>
        <ButtonWrapper>
          <AgreeButton onClick={handleAgree}>동의</AgreeButton>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </ButtonWrapper>
      </ModalBox>
    </Overlay>
  );
};

export default PrivacyModal;

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
  max-width: 85dvh;
  height: auto;
  min-height: 241px;
  border-radius: 12px;
  padding: 32px 16px;
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
  margin: 0 0 16px 0;
  font-size: 22px;
  font-weight: 700;
  color: #000000;
  text-align: center;
  white-space: pre-line;
`;

const Content = styled.p`
  margin-bottom: 24px;
  font-size: 12px;
  font-weight: 300;
  color: #555;
  text-align: center;
  line-height: 1.5;
  white-space: pre-line;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 268px;
`;

const AgreeButton = styled.button`
  width: 122px;
  height: 53px;
  background-color: black;
  color: white;
  border-radius: 12px;
  font-size: 22px;
  white-space: nowrap;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const CloseButton = styled.button`
  width: 122px;
  height: 53px;
  background-color: white;
  color: black;
  border-radius: 12px;
  border: 1px solid black;
  font-size: 22px;
  white-space: nowrap;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
