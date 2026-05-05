// 10. 질문 작성 완료 (지연)
// /choice-done 페이지 묶음
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Complete from "./Complete";
import { useSurvey } from "../contexts/SurveyContext.jsx";
import api from "../api/axios";

/**
 * SurveyContext의 답변 형식을 서버 요청 형식으로 변환
 * 
 * 변환 과정:
 * - animalType: 배열에서 첫 번째 요소만 전송
 * - 나머지: 그대로 전송
 */
const buildPayload = (answers) => ({
  gender: answers.gender, 
  animalType: answers.animalType[0], // 배열에서 첫 번째 요소
  interests: answers.interests, // 3개 선택
  movieGenres: answers.movieGenres, // 2개 선택
  preferredAnimals: answers.preferredAnimals, // 3개 또는 '상관없음'
});

export default function SelectPage({ title, button, topinfo, bottominfo }) {
  const navigate = useNavigate();
  const { answers } = useSurvey();
  const [loading, setLoading] = useState(false);

  /**
   * 설문 데이터를 서버에 제출하는 함수
   * 
   * 과정:
   * 1. 로딩 상태로 변경 (중복 제출 방지)
   * 2. answers를 서버 형식으로 변환
   * 3. API 호출
   * 4. 성공: 프로필 페이지로 이동
   * 5. 실패: 에러 메시지 표시
   * 6. 로딩 상태 해제
   */
  const handleSubmit = async () => {
    if (loading) return; // 이미 제출 중이면 무시
    setLoading(true);
    try {
      const payload = buildPayload(answers);

      // 제출 API 호출
      const res = await api.post("/api/onboarding/submit", payload);

      if (!res.data.isSuccess) {
        alert(res.data.message ?? "저장에 실패했어요.");
        return;
      }

      // 성공: 프로필 확인 페이지로 이동
      navigate("/profile", { state: { result: res.data.result } });
    } catch (err) {
      const serverMsg = err.response?.data?.message;
      const code = err.response?.data?.code;

      // 토큰 만료 시 예외처리
      if (code === "AUTH_4011") {
        alert("로그인이 만료되었어요. 다시 로그인해주세요.");
        navigate("/login");
        return;
      }

      // 기타 에러
      alert(serverMsg ?? "전송에 실패했어요. 잠시 후 다시 시도해주세요.");
      console.error("온보딩 전송 실패:", err);
    } finally {
      setLoading(false); // 로딩 상태 해제
    }
  };

  return (
    <Complete
      title={title}
      button={loading ? "전송 중..." : button}
      topinfo={topinfo}
      bottominfo={bottominfo}
      onButtonClick={handleSubmit}
    />
  );
}
