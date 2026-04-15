// 10. 질문 작성 완료 (지연)
// /choice-done 페이지 묶음

import Complete from "./Complete";
import { useNavigate } from "react-router-dom";

export default function SelectPage({ title, button }) {
  const navigate = useNavigate();

  return (
    <Complete
      title={title}
      button={button}
      onButtonClick={() => navigate("/profile")}
    />
  );
}
