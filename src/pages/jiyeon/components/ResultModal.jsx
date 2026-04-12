// 공통 모달 컴포넌트 - 아래처럼 갖다쓰세요잉
// const [isModalOpen, setIsModalOpen] = useState(false);
// <Modal
//   isOpen={isModalOpen}
//   onClose={() => setIsModalOpen(false)}
//   title="모달창 제목"
// >
//   <img src="이미지" alt="이미지설명" width="100" />
//   <p>
//     모달내용띠
//   </p>
// </Modal>;

import React, { useState } from "react";
import styled from "styled-components";
import { Copy } from "lucide-react";

// isOpen: 모달이 열려있는지 여부
// onClose: 모달을 닫는 함수
// title: 모달 상단 제목
// children: 모달 창 안에 들어갈 내용물
// instagramId: 인스타그램 아이디

const Modal = ({ isOpen, onClose, title, children, instagramId }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(instagramId);
      } else {
        //혹시나 오류 났을 때를 대비한 fallback 구조
        const textArea = document.createElement("textarea");
        textArea.value = instagramId;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("복사 실패:", error);
    }
  };

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        {title && <Title>{title}</Title>}
        <Info>{children}</Info>

        <InstaBox>
          <InstaText>{instagramId}</InstaText>
          <CopyButton type="button" onClick={handleCopy}>
            <Copy size={22} strokeWidth={1.8} />
          </CopyButton>
        </InstaBox>

        {copied && <CopiedText>ID 복사 완료!</CopiedText>}

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
  font-size: 28px;
  font-weight: 700;
  color: #000000;
  text-align: center;
`;

const Info = styled.p`
  font-size: 12px;
  color: rgb(86, 86, 86);
  margin-top: 15px;
`;

const InstaBox = styled.div`
  margin-top: 32px;
  width: 90%;
  height: 53px;
  border-radius: 14px;
  border: 1px solid;
  border-color: rgb(115, 111, 111);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InstaText = styled.p`
  font-size: 22px;
  color: #222;
  font-weight: 500;
`;

const CopyButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  padding: 0;
  color: #777;
`;

const CopiedText = styled.p`
  margin-top: 8px;
  font-size: 12px;
  color: #ff6b6b;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
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
