// 지연 전용 라우팅 파일
// 라우팅을 App.js에 하지 말고 여기서!
import { Routes, Route } from "react-router-dom";
import Complete from "./Complete";
// import Login from "./Login"; 이런 식으로 본인이 만든 페이지 불러와서

export default function JiyeonRouter() {
  return (
    <Routes>
      <Route path="/complete" element={<Complete 
      title="선택 완료!"
      gap="35px"/>} />

      <Route path= "/about-me" element={<Complete title="질문에 대한
답변을 선택해줘!"
      fontSize="2rem" />} />

      <Route path= "/about-you" element={<Complete title="이제 내가 원하는
상대를 골라보자!"
      fontSize="2rem" />} />

      {/* 순서대로 선택 완료, 본인 선택, 상대 선택 페이지 */}
      {/* <Route path="login" element={<Login />} /> 이런 식으로 본인이 만든 페이지 라우팅 설정하세용*/}
      {/* 자기가 만든 페이지 확인하고 싶으면 이거 연동 다 하고 주소 뒤에 jiyeon/login 처럼 입력하면 됨 */}
    </Routes>
  );
}
