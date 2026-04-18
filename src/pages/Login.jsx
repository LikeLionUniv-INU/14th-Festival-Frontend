// 2-1. 정보 입력 → 개인정보 수집 동의 (아현)

import React, { useState } from "react";
import * as S from "../pages/Login.styles";
import PrivacyModal from "../components/modal/PrivacyModal";
import lion from "../assets/images/lion/small-basic-lion.webp";

const Login = () => {
  const [instaId, setInstaId] = useState("");
  const [userNum, setUserNum] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleUserNumChange = (e) => {
    const value = e.target.value;
    const onlyNumber = value.replace(/[^0-9]/g, "").slice(0, 4);
    setUserNum(onlyNumber);
  };

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

  const isFormValid =
    instaId.length >= 3 &&
    instaId.length <= 30 &&
    errorMsg === "" &&
    userNum.length === 4;

  return (
    <S.Container>
      <S.Content>
        <S.Img src={lion} />
        <S.LoginTitle>
          인스타 ID와 본인확인용 <br />
          숫자를 입력해주세요
        </S.LoginTitle>
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
          <S.GuideText>
            원활한 진행을 위해 본인 계정을 입력해주세요{" "}
          </S.GuideText>
        )}
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
