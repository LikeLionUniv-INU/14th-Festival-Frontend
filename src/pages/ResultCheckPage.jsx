// 12. 18시 이후 결과 확인창 (아현)

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ResultCheckPage.styles";
import smallBasicLion from "../assets/images/lion/small-basic-lion.png";

const ResultCheckPage = () => {
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
        <S.Img src={smallBasicLion} />
        <S.ResultTitle>
          결과 확인을 위해 <br />
          본인 확인을 해주세요!
        </S.ResultTitle>
        <S.InputBox
          type="text"
          placeholder="ex) @likelion_inu"
          value={instaId}
          onChange={(e) => setInstaId(e.target.value)}
        />
        <S.GuideText> 당신은 행운아 ~ </S.GuideText>
        <S.InputBox
          type="text"
          placeholder="ex) 1234"
          value={userNum}
          onChange={handleUserNumChange}
        />
        <S.GuideText> 캡처 화면을 들고 멋사 부스로 와주세요! </S.GuideText>
        <S.Button onClick={() => setIsModalOpen(true)} disabled={!isFormValid}>
          결과 확인하기
        </S.Button>
      </S.Content>
    </S.Container>
  );
};

export default ResultCheckPage;
