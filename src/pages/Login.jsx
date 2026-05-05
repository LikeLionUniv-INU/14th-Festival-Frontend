/**
 * 로그인 페이지 (시간 & 설문 진행도에 따른 분기)
 *
 * 흐름:
 * 1. 인스타 ID + 숫자 4자리 입력
 * 2. 로그인 API 호출
 * 3. 현재 시간(PHASE)과 설문 완료 여부에 따라 페이지 분기:
 *    - SURVEY (11-17시): 개인정보 동의 → 설문 작성 또는 프로필 확인
 *    - PREPARING (0-11시): 아직 오픈 안 됨 안내
 *    - AGGREGATING (17-18시): 결과 집계 중 안내
 *    - RESULT (18-24시): 매칭 결과 확인
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../pages/Login.styles";
import PrivacyModal from "../components/modal/PrivacyModal";
import NotTimeModal from "../components/modal/NotTimeModal";
import lion from "../assets/images/lion/small-basic-lion.webp";
import api from "../api/axios";
import { useSurvey } from "../contexts/SurveyContext";
import { getPhase } from "../utils/serviceTime";
import {
  validateAndFormatInstaId,
  isValidInstaId,
  isValidVerificationPin,
  isBlackListedId,
} from "../utils/validation";

const Login = () => {
  const { resetAnswers } = useSurvey();
  const [instaId, setInstaId] = useState(""); // 사용자 인스타 ID
  const [userNum, setUserNum] = useState(""); // 본인확인 숫자 (4자리)
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false); // 개인정보 동의 모달
  const [isNotTimeOpen, setIsNotTimeOpen] = useState(false); // 서비스 불가 안내 모달
  const [modalContent, setModalContent] = useState(""); // 모달 메시지
  const [errorMsg, setErrorMsg] = useState(""); // 입력 에러 메시지
  const [isLoading, setIsLoading] = useState(false); // API 호출 중 여부
  const navigate = useNavigate();

  // 입력값이 유효한지 확인 (모두 정상이면 버튼 활성화)
  const isFormValid =
    isValidInstaId(instaId) && isValidVerificationPin(userNum);

  /**
   * 로그인 후 현재 시간에 따라 다음 페이지로 분기
   *
   * SURVEY 시간대 (11-17시):
   *   - privacyConsent = false: 동의 모달 열기 → 동의하면 설문
   *   - privacyConsent = true & isComplete = false: 설문 작성 페이지로
   *   - privacyConsent = true & isComplete = true: 프로필 확인 페이지로
   *
   * PREPARING (0-11시):
   *   - isComplete = true: 어제 설문 결과 확인
   *   - isComplete = false: 준비 중 모달
   *
   * AGGREGATING (17-18시): 결과 집계 중 모달
   *
   * RESULT (18-24시):
   *   - isComplete = true: 매칭 결과 확인
   *   - isComplete = false: '오늘 참여 기록 없음' 모달
   */
  const routeAfterLogin = async ({ isComplete, privacyConsent }) => {
    const phase = getPhase();

    // SURVEY 단계 (11-17시): 설문 작성 또는 진행
    if (phase === "SURVEY") {
      if (!privacyConsent)
        setIsPrivacyOpen(true); // 개인정보 동의 필수
      else if (!isComplete)
        navigate("/lets-choice"); // 미완료면 설문 작성하러 가기
      else navigate("/profile"); // 이미 작성했으면 프로필로
      return;
    }

    // PREPARING 단계 (0-11시): 아직 오픈 전
    if (phase === "PREPARING") {
      if (isComplete)
        await getMatchResult(); // 이미 완료 상태면 어제 결과 띄우기
      else {
        setModalContent("오전 11시 오픈입니다!");
        setIsNotTimeOpen(true);
      }
      return;
    }

    // AGGREGATING 단계 (17-18시): 결과 집계 중
    if (phase === "AGGREGATING") {
      setModalContent("매칭 결과 집계 중이에요!");
      setIsNotTimeOpen(true);
      return;
    }

    // RESULT 단계 (18-24시): 매칭 결과 공개
    if (isComplete)
      await getMatchResult(); // 설문했으면 결과 확인
    else {
      // 오늘 설문 안 했으면
      setModalContent(`오늘 참여한 기록이 없어요!\n내일 다시 만나요~`);
      setIsNotTimeOpen(true);
    }
  };

  /**
   * 로그인 처리
   *
   * 과정:
   * 1. 인스타 ID + 숫자 검증 API 호출
   * 2. 다른 사용자로 로그인하면 이전 설문 데이터 초기화
   * 3. 토큰 저장
   * 4. 시간 & 진행도에 따라 다음 페이지로 분기
   */
  const handleLoginClick = async () => {
    if (!isFormValid || isLoading) return;
    setIsLoading(true);
    setErrorMsg("");

    try {
      // 로그인 API 호출
      const response = await api.post("/api/onboarding/instagram", {
        instagramId: instaId,
        verificationPin: userNum,
      });

      if (!response.data.isSuccess) return;
      const { isComplete, privacyConsent, accessToken } = response.data.result;

      // 다른 사용자로 로그인 시 이전 데이터 초기화
      const lastLoggedInId = localStorage.getItem("lastLoggedInId");

      if (lastLoggedInId !== instaId) {
        resetAnswers(); // 설문 데이터 초기화
        localStorage.removeItem("isCompleted"); // 완료 여부 초기화
        localStorage.setItem("lastLoggedInId", instaId); // 현재 사용자 기록해두기
      }

      localStorage.setItem("accessToken", accessToken); // 토큰 저장
      localStorage.setItem("isCompleted", JSON.stringify(isComplete));

      // 현재 시간과 설문 완료도에 따라 분기
      await routeAfterLogin({ isComplete, privacyConsent });
    } catch (error) {
      // 서버 에러 메시지 표시
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

  /**
   * 매칭 결과 확인 (18-24시에만 호출됨)
   * 이전에 설문을 완료했으면 여기서 결과를 조회
   */
  const getMatchResult = async () => {
    try {
      const response = await api.post("/api/match/result", {
        instagramId: instaId,
        verificationPin: userNum,
      });
      if (response.data.isSuccess) {
        const { isMatched, partnerInstagramId } = response.data.result;
        // 매칭 성공/실패에 따라 페이지 이동
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

  /** 개인정보 동의 처리 */
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

  /**
   * 인스타 ID 입력 처리
   * - @로 시작해야 함
   * - 영소문자, 숫자, 언더스코어, 점만 입력 가능
   * - 검증 함수에서 처리
   * - 30자 초과 입력 방지
   */
  const handleInstaIdChange = (e) => {
    const formatted = validateAndFormatInstaId(e.target.value);
    setInstaId(formatted);

    if (isBlackListedId(formatted)) {
      setErrorMsg("사용할 수 없는 아이디입니다.");
    } else {
      setErrorMsg("");
    }
  };

  /**
   * 본인확인 숫자 입력 처리
   * 숫자만 4자리까지 입력 가능
   */
  const handleUserNumChange = (e) => {
    const onlyNumber = e.target.value.replace(/[^0-9]/g, "").slice(0, 4);
    setUserNum(onlyNumber);
    // 새로운 입력이 들어오면 에러 메시지 초기화 (버튼 활성화되게)
    if (errorMsg.includes("비밀번호") || errorMsg.includes("가입"))
      setErrorMsg("");
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
