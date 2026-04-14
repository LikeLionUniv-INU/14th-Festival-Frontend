// 4. ‘질문에 대한 답변’ 진행화면 (지연)
//lets-choice 페이지 묶음

import Complete from "./Complete";
import { useNavigate } from "react-router-dom";

export default function QuestionPage({ title, button }) {
  const navigate = useNavigate();

  return (
    <Complete
      title={title}
      fontSize="2rem"
      button={button}
      animation="typewriter"
      onButtonClick={() => navigate("/gender")}
    />
  );
}
