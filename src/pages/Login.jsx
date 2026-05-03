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

const Login = () => {
  const { resetAnswers } = useSurvey();
  const [instaId, setInstaId] = useState("");
  const [userNum, setUserNum] = useState("");
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isNotTimeOpen, setIsNotTimeOpen] = useState(false);
  const [modalContent, setModalContent] = useState(undefined);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

      if (response.data.isSuccess) {
        const { isComplete, isSuccess, privacyConsent, accessToken } =
          response.data.result;

        // localStorage 저장 - 에러 처리
        try {
          // 이전 토큰 있을 시 검사 후 삭제
          const lastLoggedInId = localStorage.getItem("lastLoggedInId");
          if (lastLoggedInId !== instaId) {
            resetAnswers();
            localStorage.removeItem("isCompleted");
            localStorage.setItem("lastLoggedInId", instaId);
          }

          localStorage.setItem("accessToken", accessToken); // 새 토큰 저장
        } catch (storageError) {
          console.error("localStorage 저장 실패:", storageError);
          setErrorMsg(
            "데이터 저장에 실패했습니다. 브라우저 설정을 확인해주세요.",
          );
          setIsLoading(false);
          return;
        }

        const now = new Date();
        const hour = now.getHours();

        // 11시 ~ 17시 ff는 개인정보 모달 tf는 답변 tt는 프로필
        if (hour >= 11 && hour < 17) {
          if (privacyConsent === false && isComplete === false) {
            setIsPrivacyOpen(true);
          } else if (privacyConsent === true && isComplete === false) {
            navigate("/lets-choice");
          } else {
            navigate("/profile");
          }
        }
        // 17시 ~ 18시
        else if (hour >= 17 && hour < 18) {
          if (privacyConsent === true && isComplete === true) {
            setModalContent("매칭 결과를 집계 중이에요!");
            setIsNotTimeOpen(true);
          } else {
            setIsNotTimeOpen(true);
          }
        }
        // 18시 ~ 10시
        else if (hour >= 18 || hour < 10) {
          if (privacyConsent === true && isComplete === true) {
            await getMatchResult();
          } else {
            const msg =
              hour < 10 ? "오전 11시에 오픈됩니다!" : "내일 다시 만나요!";
            setModalContent(msg);
            setIsNotTimeOpen(true);
          }
        }
        // 10시 ~ 11시
        else {
          setModalContent("서비스 오픈 준비 중!");
          setIsNotTimeOpen(true);
        }
      }
    } catch (error) {
      // API 응답 에러
      if (error.response?.data) {
        const errorCode = error.response.data.code;
        const errorMessage = error.response.data.message;

        if (errorCode === "USER_4011") {
          setErrorMsg("비밀번호가 일치하지 않습니다.");
        } else if (errorCode === "USER_4001") {
          setErrorMsg("가입되지 않은 계정입니다.");
        } else {
          setErrorMsg(errorMessage || "로그인 실패. 다시 시도해주세요.");
        }
      }
      // 네트워크 에러 (axios 인터셉터에서 처리된 메시지)
      else {
        setErrorMsg(
          error.message || "네트워크 오류가 발생했습니다. 다시 시도해주세요.",
        );
      }
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

        if (isMatched) {
          navigate("/match-success", {
            state: { instagramId: partnerInstagramId },
          });
        } else {
          navigate("/match-fail");
        }
      }
    } catch (error) {
      if (error.response?.data) {
        const errorMessage =
          error.response.data.message || "매칭 결과를 불러올 수 없습니다.";
        setModalContent(errorMessage);
      } else {
        setModalContent(
          error.message || "네트워크 오류가 발생했습니다. 다시 시도해주세요.",
        );
      }
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
    const value = e.target.value;
    const onlyNumber = value.replace(/[^0-9]/g, "").slice(0, 4);
    setUserNum(onlyNumber);
    // 입력 시 이전 API 에러 메시지 제거
    if (
      (errorMsg && errorMsg.includes("비밀번호")) ||
      errorMsg.includes("가입")
    ) {
      setErrorMsg("");
    }
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
    instaId.length >= 3 && instaId.length <= 30 && userNum.length === 4;

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
        <S.Button
          onClick={handleLoginClick}
          disabled={!isFormValid || isLoading}
        >
          {/* <S.Button onClick={handleLogin} disabled={!isFormValid}> */}
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
