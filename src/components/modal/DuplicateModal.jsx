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
import lion from "../../assets/images/lion/small-crying-lion.webp";
import cryingLion from "../../assets/images/lion/small-crying-lion.webp";

// isOpen: 모달이 열려있는지 여부
// onClose: 모달을 닫는 함수
// title: 모달 상단 제목
// children: 모달 창 안에 들어갈 내용물

const DuplicateModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        {<Title>{"이미 참여했어요"}</Title>}

        <img src={lion} width="110" />

        <Content>{"18시 이후에\n 결과를 확인할 수 있어요!"}</Content>

        <Info>{"내일 또 참여할 수 있어요"}</Info>

        <ButtonWrapper>
          <CloseButton onClick={onClose}>확인</CloseButton>
        </ButtonWrapper>
      </ModalBox>
    </Overlay>
  );
};

export default DuplicateModal;

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
  height: 397px;
  min-height: 397px;
  border-radius: 12px;
  padding: 32px 64px;
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
  margin: 0 0 14px 0;
  font-size: 28px;
  font-weight: 700;
  color: #000000;
  text-align: center;
`;

const Content = styled.p`
  margin-bottom: 2px;
  font-size: 20px;
  color: black;
  text-align: center;
  line-height: 1.5;
  white-space: pre-line;
  width: 260px;
  margin-top: 12px;
  line-height: 23px;
`;

const Info = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: rgb(113, 113, 113);
  margin-top: 12px;
  margin-bottom: 40px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
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
