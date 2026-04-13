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

const NotTimeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        {
          <Title>
            {"지금은\n 매칭시간이\n 아니예요!"}
          </Title>
        }

        <img src="/assets/smallcryingLion.png" width="100" />

        <Content>
          {"내일 다시 만나요"}
        </Content>

        <ButtonWrapper>
          <CloseButton onClick={onClose}>확인</CloseButton>
        </ButtonWrapper>
      </ModalBox>
    </Overlay>
  );
};

export default NotTimeModal;

// --- 스타일 ---
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  background-color: #ffffff;
  width: 85%;
  max-width: 342px;
  height: 412px;
  min-height: 412px;
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
  margin: 0 0 16px 0;
  font-size: 28px;
  font-weight: 700;
  color: #000000;
  text-align: center;
`;

const Content = styled.div`
  margin-bottom: 24px;
  font-size: 20px;
  color: #555;
  text-align: center;
  line-height: 1.5;
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
