// 2-1. 정보 입력 → 개인정보 수집 동의 (아현)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../pages/Login.styles";
import PrivacyModal from "../components/modal/PrivacyModal";
import NotTimeModal from "../components/modal/NotTimeModal";
import lion from "../assets/images/lion/small-basic-lion.webp";
import axios from "axios";
import api from "../api/axios";
import { useSurvey } from "../contexts/SurveyContext";
import { getPhase } from "../constants/serviceTime";

const BLACK_IDS = [
  "@likelion_inu",
  "@insta",
  "@instagram",
  "@likelion",
  "@likelion.inu",
];

const Login = () => {
  const { resetAnswers } = useSurvey();
  const [instaId, setInstaId] = useState("");
  const [userNum, setUserNum] = useState("");
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isNotTimeOpen, setIsNotTimeOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const isFormValid =
    instaId.length >= 3 && instaId.length <= 30 && userNum.length === 4;

  /** 로그인 후 phase + 진행상태에 따라 분기 */
  const routeAfterLogin = async ({ isComplete, privacyConsent }) => {
    const phase = getPhase();

    if (phase === "PREPARING") {
      setModalContent("오전 11시에 오픈돼요! 🦁");
      setIsNotTimeOpen(true);
      return;
    }

    if (phase === "AGGREGATING") {
      setModalContent("매칭 결과를 집계 중이에요! 🦁");
      setIsNotTimeOpen(true);
      return;
    }

    if (phase === "RESULT") {
      if (isComplete) await getMatchResult();
      else {
        setModalContent("오늘은 참여하지 않으셨어요. 내일 다시 만나요! 🦁");
        setIsNotTimeOpen(true);
      }
      return;
    }

    // SURVEY 단계
    if (!privacyConsent) setIsPrivacyOpen(true);
    else if (!isComplete) navigate("/lets-choice");
    else navigate("/profile");
  };

  /** 인스타 ID 및 본인확인 숫자 검증 API */
  const handleLoginClick = async () => {
    if (!isFormValid || isLoading) return;
    setIsLoading(true);
    setErrorMsg("");

    try {
      const response = await api.post("/api/onboarding/instagram", {
        instagramId: instaId,
        verificationPin: userNum,
      });

      if (!response.data.isSuccess) return;
      const { isComplete, privacyConsent, accessToken } = response.data.result;

      // 다른 사용자로 로그인 시 이전 데이터 초기화
      const lastLoggedInId = localStorage.getItem("lastLoggedInId");
      if (lastLoggedInId !== instaId) {
        resetAnswers();
        localStorage.setItem("lastLoggedInId", instaId);
      }
      localStorage.setItem("accessToken", accessToken);

      await routeAfterLogin({ isComplete, privacyConsent });
    } catch (error) {
      const code = error.response?.data?.code;
      const msg = error.response?.data?.message;
      if (code === "USER_4011") setErrorMsg("비밀번호가 일치하지 않습니다.");
      else if (code === "USER_4001") setErrorMsg("가입되지 않은 계정입니다.");
      else
        setErrorMsg(msg || error.message || "로그인 실패. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  /** 18-10시 매칭 결과 확인 API */
  const getMatchResult = async () => {
    try {
      const response = await api.post("/api/match/result", {
        instagramId: instaId,
        verificationPin: userNum,
      });
      if (response.data.isSuccess) {
        const { isMatched, partnerInstagramId } = response.data.result;
        navigate(isMatched ? "/match-success" : "/match-fail", {
          state: { instagramId: partnerInstagramId },
        });
      }
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        error.message ||
        "매칭 결과를 불러올 수 없습니다.";
      setModalContent(msg);
      setIsNotTimeOpen(true);
    }
  };

  const submitLogin = async () => {
    setIsLoading(true);
    try {
      const response = await api.post("/api/onboarding/privacy", {
        instagramId: instaId,
        privacyConsent: true,
      });

      if (response.data.isSuccess) {
        navigate("/lets-choice"); // 동의 완료되면 설문 페이지로!
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "동의 처리 중 오류가 발생했습니다. 다시 시도해주세요.";
      setErrorMsg(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserNumChange = (e) => {
    const onlyNumber = e.target.value.replace(/[^0-9]/g, "").slice(0, 4);
    setUserNum(onlyNumber);
    if (errorMsg.includes("비밀번호") || errorMsg.includes("가입"))
      setErrorMsg("");
  };

  const handleInstaIdChange = (e) => {
    let filtered = e.target.value.toLowerCase().replace(/[^a-z0-9._@]|\s/g, "");
    if (filtered.includes("..")) return;
    filtered =
      "@" +
      (filtered.startsWith("@") ? filtered.slice(1) : filtered).replace(
        /@/g,
        "",
      );
    if (filtered.length <= 30) setInstaId(filtered);
    setErrorMsg(
      BLACK_IDS.includes(filtered) ? "사용할 수 없는 아이디입니다." : "",
    );
  };

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
          <S.GuideText $isError>{errorMsg}</S.GuideText>
        ) : (
          <S.GuideText>원활한 진행을 위해 본인 계정을 입력해주세요</S.GuideText>
        )}
        <S.InputBox
          type="text"
          placeholder="ex) 1234"
          value={userNum}
          onChange={handleUserNumChange}
        />
        <S.GuideText>숫자 4자리</S.GuideText>
        <S.Button
          onClick={handleLoginClick}
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? "진행 중..." : "입력완료"}
        </S.Button>
      </S.Content>

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        onConfirm={() => {
          setIsPrivacyOpen(false);
          submitLogin();
        }}
      />
      <NotTimeModal
        isOpen={isNotTimeOpen}
        onClose={() => setIsNotTimeOpen(false)}
      >
        {modalContent}
      </NotTimeModal>
    </S.Container>
  );
};

export default Login;
