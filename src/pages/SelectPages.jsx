// 10. 질문 작성 완료 (지연)
// /choice-done 페이지 묶음
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Complete from "./Complete";
import { useSurvey } from "../contexts/SurveyContext.jsx";
import api from "../api/axios";

// 서버 요청 형식 변환
const buildPayload = (answers) => ({
  gender: answers.gender,
  animalType: answers.animalType[0],
  interests: answers.interests,
  movieGenres: answers.movieGenres,
  preferredAnimals: answers.preferredAnimals,
});

export default function SelectPage({ title, button, topinfo, bottominfo }) {
  const navigate = useNavigate();
  const { answers } = useSurvey();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const payload = buildPayload(answers);
      console.log("전송 데이터:", payload); // 테스트 (나중에 지울거임)

      const res = await api.post("/api/onboarding/submit", payload);

      if (!res.data.isSuccess) {
        alert(res.data.message ?? "저장에 실패했어요.");
        return;
      }

      navigate("/profile", { state: { result: res.data.result } });
    } catch (err) {
      const serverMsg = err.response?.data?.message;
      const code = err.response?.data?.code;

      if (code === "AUTH_4011") {
        alert("로그인이 만료되었어요. 다시 로그인해주세요.");
        navigate("/login");
        return;
      }

      alert(serverMsg ?? "전송에 실패했어요. 잠시 후 다시 시도해주세요.");
      console.error("온보딩 전송 실패:", err);
    } finally {
      setLoading(false);
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
