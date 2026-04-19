// 13. 매칭 성공 (지연)
// 13-1. 상대 인스타 확인창 (지연)
// 14. 매칭 실패 (지연)
// match-success, match-fail 페이지 묶음

import React, { useState } from "react";

import Complete from "./Complete";
import Modal from "../components/modal/ResultModal";
import { useNavigate } from "react-router-dom";

export default function MatchResultPage({
  title,
  lion,
  topinfo,
  bottominfo,
  button,
  isSuccess,
}) {
  /* 모달창 열기 */
  const [isModalOpen, setIsModalopen] = useState(false);
  const handleButtonClick = () => {
    if (isSuccess) {
      setIsModalopen(true);
    }
  };

  const navigate = useNavigate();

  /* 모달창 안 인스타그램 아이디
  나머지 과정은 모달 컴포넌트 안에 구현 */
  const instagramId = "인스타 ID"; //백엔드 값으로 교체

  return (
    <>
      <Complete
        title={title}
        lion={lion}
        fontSize="40px"
        topinfo={topinfo}
        bottominfo={bottominfo}
        button={button}
        onButtonClick={isSuccess ? handleButtonClick : () => navigate("/")}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalopen(false)}
        title="내 동물친구는?"
        instagramId={instagramId}
      >
        똑똑, 인스타 DM으로 대화를 시작해보세요
      </Modal>
    </>
  );
}
