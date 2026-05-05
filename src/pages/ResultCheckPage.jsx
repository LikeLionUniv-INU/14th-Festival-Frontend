/**
 * 결과 확인 페이지 (18-24시)
 *
 * 역할:
 * - 사용자가 설문했던 인스타 ID와 숫자로 로그인
 * - 매칭 결과 확인 (매칭 성공 / 실패)
 * - 매칭 성공 시 상대방 인스타 ID 표시
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ResultCheckPage.styles";
import smallBasicLion from "../assets/images/lion/small-basic-lion.webp";
import api from "../api/axios";
import {
  validateAndFormatInstaId,
  isValidInstaId,
  isValidVerificationPin,
} from "../utils/validation";

const ResultCheckPage = () => {
  const [instaId, setInstaId] = useState(""); // 인스타 ID
  const [userNum, setUserNum] = useState(""); // 본인확인 숫자
  const [isModalOpen, setIsModalOpen] = useState(false); // 결과 모달
  const [errorMsg, setErrorMsg] = useState(""); // 입력 에러
  const [isLoading, setIsLoading] = useState(false); // API 호출 중
  const navigate = useNavigate();

  // 입력값이 모두 유효한지 확인
  const isFormValid =
    isValidInstaId(instaId) && isValidVerificationPin(userNum);

  /**
   * 매칭 결과 조회 함수
   *
   * 과정:
   * 1. 입력값 유효성 확인
   * 2. API 호출
   * 3. 매칭 결과에 따라 페이지 이동
   *    - 성공: /match-success (상대방 ID와 함께)
   *    - 실패: /match-fail
   */
  const handleResult = async () => {
    if (isLoading) return; // 이미 조회 중이면 무시
    setIsLoading(true);
    try {
      const response = await api.post("/api/match/result", {
        instagramId: instaId,
        verificationPin: userNum,
      });

      if (response.data.isSuccess) {
        const isMatched = response.data.result?.isMatched;

        // 매칭 결과에 따라 다른 페이지로 이동
        if (isMatched) {
          // 매칭 성공: 상대방 ID를 state로 전달
          const partnerInstagramId = response.data.result.partnerInstagramId;
          navigate("/match-success", {
            state: { instagramId: partnerInstagramId },
          });
        } else {
          // 매칭 실패
          navigate("/match-fail");
        }
      }
    } catch (error) {
      // 에러 코드별 처리
      const errorCode = error.response?.data?.code;
      const errorMessage = error.response?.data?.message;

      if (errorCode === "USER_4001") alert(errorMessage);
      else if (errorCode === "MATCH_4031") alert(errorMessage);
      else if (errorCode === "MATCH_4041") alert(errorMessage);
      else alert(errorMessage || "결과 조회에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInstaIdChange = (e) => {
    const formatted = validateAndFormatInstaId(e.target.value);
    setInstaId(formatted);
    setErrorMsg("");
  };

  const handleUserNumChange = (e) => {
    const value = e.target.value;
    const onlyNumber = value.replace(/[^0-9]/g, "").slice(0, 4);
    setUserNum(onlyNumber);
  };

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
        <S.Button onClick={handleResult} disabled={!isFormValid || isLoading}>
          {isLoading ? "로딩 중..." : "결과 확인하기"}
        </S.Button>
      </S.Content>
    </S.Container>
  );
};

export default ResultCheckPage;
