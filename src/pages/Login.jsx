// 2-1. 정보 입력 → 개인정보 수집 동의 (아현)

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style/login.style";
import PrivacyModal from "../../../components/common/PrivacyModal";

const Login = () => {
  const [instaId, setInstaId] = useState("");
  const [userNum, setUserNum] = useState("");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserNumChange = (e) => {
    const value = e.target.value;
    const onlyNumber = value.replace(/[^0-9]/g, "").slice(0, 4);
    setUserNum(onlyNumber);
  };

  const isFormValid = instaId.trim() !== "" && userNum.length === 4;

  return (
    <S.Container>
      <S.Content>
        <S.Img src="/assets/smallbasicLion.png" />
        <S.LoginTitle>
          인스타 ID와 본인확인용 <br />
          숫자를 입력해주세요
        </S.LoginTitle>
        <S.InputBox
          type="text"
          placeholder="ex) @likelion_inu"
          value={instaId}
          onChange={(e) => setInstaId(e.target.value)}
        />
        <S.GuideText> 원활한 진행을 위해 본인 계정을 입력해주세요 </S.GuideText>
        <S.InputBox
          type="text"
          placeholder="ex) 1234"
          value={userNum}
          onChange={handleUserNumChange}
        />
        <S.GuideText> 숫자 4자리 </S.GuideText>
        <S.Button onClick={() => setIsModalOpen(true)} disabled={!isFormValid}>
          입력완료
        </S.Button>
      </S.Content>
      <PrivacyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </S.Container>
  );
};

export default Login;
