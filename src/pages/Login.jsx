// 2-1. 정보 입력 → 개인정보 수집 동의 (아현)

import React, { useState } from "react";
import * as S from "../pages/Login.styles";
import PrivacyModal from "../components/modal/PrivacyModal";
import NotTimeModal from "../components/modal/NotTimeModal";
import lion from "../assets/images/lion/small-basic-lion.webp";
import axios from "axios";

const Login = () => {
  const [instaId, setInstaId] = useState("");
  const [userNum, setUserNum] = useState("");
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isNotTimeOpen, setIsNotTimeOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  /** 인스타 ID 및 본인확인 숫자 검증 API */
  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/onboarding/instagram", {
        instagramId: instaId,
        verificationPin: userNum,
      });

      if (response.date.isSuccess) {
        const isSuccess = response.data.result.isSuccess;
        const now = new Date();
        const hour = now.getHours();

        // 오전 11시 ~ 오후 5시
        if (hour >= 11 && hour < 17) {
          if (isSuccess === false) navigate("/lets-choice");
          else navigate("/profile");
        }
        // 오후 5시 ~ 오후 6시   모달로 바꿔야됨
        else if (hour >= 17 && hour < 18) {
          if (isSuccess === true) setIsModalOpen(true);
          else setIsNotTimeOpen(true);
        }
        // 오후 6시 ~ 오전 10시
        else if (hour >= 18 && hour < 10) {
          if (isSuccess === true) navigate("/match");
          else setIsNotTimeOpen(true);
        }
      }
    } catch (error) {
      const errorCode = error.response?.data?.code;

      if (errorCode === "USER_4011")
        setErrorMsg("비밀번호가 일치하지 않습니다.");
    }
  };

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
          {/* <S.Button onClick={handleLogin} disabled={!isFormValid}> */}
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
