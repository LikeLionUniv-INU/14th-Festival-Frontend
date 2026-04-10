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

import React from "react";
import styled from "styled-components";

// isOpen: 모달이 열려있는지 여부
// onClose: 모달을 닫는 함수
// title: 모달 상단 제목
// children: 모달 창 안에 들어갈 내용물
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        {title && <Title>{title}</Title>}

        <Content>{children}</Content>

        <ButtonWrapper>
          <CloseButton onClick={onClose}>닫기</CloseButton>
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
  background-color: #4a4242;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  background-color: #d9d9d9;
  width: 307px;
  height: 398px;
  border-radius: 49px;
  padding: 24px;
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
  font-size: 32px;
  color: #000000;
  text-align: center;
`;

const Content = styled.div`
  margin-bottom: 24px;
  font-size: 15px;
  color: #555;
  text-align: center;
  line-height: 1.5;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CloseButton = styled.button`
  width: 97.96px;
  height: 41.35px;
  background-color: #28041d;
  color: white;
  border-radius: 20px;
  font-size: 14px;
`;
