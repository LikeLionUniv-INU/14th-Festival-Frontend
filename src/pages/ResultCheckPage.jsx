// 12. 18시 이후 결과 확인창 (아현)

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ResultCheckPage.styles";
import smallBasicLion from "../assets/images/lion/small-basic-lion.webp";
import axios from "axios";

const ResultCheckPage = () => {
  const [instaId, setInstaId] = useState("");
  const [userNum, setUserNum] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  /** 매칭 결과 확인 API */
  const handleResult = async () => {
    try {
      const response = await axios.post('/api/match/result', {
        "instagramId": instaId,
        "verificationPin": userNum
      });

      if (response.data.isSuccess) {
        const isMatched = response.data.result?.isMatched;

        if (isMatched) {
          const { partnerInstagramId } = response.data.result.partnerInstagramId;

          navigate("/match-success", { state: { instagramId: partnerInstagramId } });
        }
        else {
          navigate("/match-fail");
        }
      }
    }
    catch (error) {
      const errorCode = error.response?.data?.code;
      const errorMessage = error.response?.data?.message;

      if (errorCode === "USER_4001")
        alert(errorMessage);
      else if (errorCode === "MATCH_4031")
        alert(errorMessage);
      else if (errorCode === "MATCH_4041")
        alert(errorMessage);
    }
  }

  const handleInstaIdChange = (e) => {
    const value = e.target.value;
    let filtered = value.toLowerCase().replace(/[^a-z0-9._@]|\s/g, "");
    if (filtered.includes("..")) return;
    if (filtered.startsWith("@")) {
      filtered = "@" + filtered.slice(1).replace(/@/g, "");
    } else {
      filtered = "@" + filtered.replace(/@/g, "");
    }

    if (filtered.length <= 30) {
      setInstaId(filtered);
    }
    const blackId = [
      "@likelion_inu",
      "@insta",
      "@instagram",
      "@likelion",
      "@likelion.inu",
    ];

    if (blackId.includes(filtered)) {
      setErrorMsg("사용할 수 없는 아이디입니다.");
    } else {
      setErrorMsg("");
    }
  };

  const handleUserNumChange = (e) => {
    const value = e.target.value;
    const onlyNumber = value.replace(/[^0-9]/g, "").slice(0, 4);
    setUserNum(onlyNumber);
  };

  const isFormValid =
    instaId.length >= 3 &&
    instaId.length <= 30 &&
    errorMsg === "" &&
    userNum.length === 4;

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
          onChange={handleInstaIdChange}
          onFocus={() => {
            if (!instaId) setInstaId("@");
          }}
        />
        {errorMsg ? (
          <S.GuideText $isError={true}>{errorMsg}</S.GuideText>
        ) : (
          <S.GuideText>당신은 행운아 ~ </S.GuideText>
        )}
        <S.InputBox
          type="text"
          placeholder="ex) 1234"
          value={userNum}
          onChange={handleUserNumChange}
        />

        <S.GuideText> 캡처 화면을 들고 멋사 부스로 와주세요! </S.GuideText>
        <S.Button onClick={handleResult} disabled={!isFormValid}>
          결과 확인하기
        </S.Button>
      </S.Content>
    </S.Container>
  );
};

export default ResultCheckPage;