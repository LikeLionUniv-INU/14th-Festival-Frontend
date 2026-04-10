// 지연 전용 라우팅 파일
// 라우팅을 App.js에 하지 말고 여기서!
// import Login from "./Login"; 이런 식으로 본인이 만든 페이지 불러와서
// JiyeonRouter.jsx
// path마다 "어떤 그룹 페이지 컴포넌트"를 쓸지만 연결

import { Routes, Route } from "react-router-dom";
import SelectPage from "./pages/SelectPages";
import QuestionPage from "./pages/QuestionPages";
import ResultPage from "./pages/ResultPages";

export default function JiyeonRouter() {
  return (
    <Routes>
      {/* SelectPage.jsx */}
      <Route
        path="/complete"
        element={<SelectPage title="작성 완료!" button="다음" />}
      />
      <Route
        path="/ready"
        element={<SelectPage title="선택 완료!" button="다음" />}
      />

      {/* QuestionPage.jsx */}
      <Route
        path="/about-me"
        element={
          <QuestionPage
            title={"질문에 대한\n답변을 선택해줘!"}
            button="시작하기"
          />
        }
      />
      <Route
        path="/about-you"
        element={
          <QuestionPage
            title={"이제 내가 원하는\n상대를 골라보자!"}
            button="다음"
          />
        }
      />

      {/* ResultPage.jsx */}
      <Route
        path="/waiting"
        element={<ResultPage title={"결과는 18시에\n나와요!"} />}
      />
      <Route
        path="/match-success"
        element={
          <ResultPage
            title="매칭 성공!"
            lion="bigheart"
            button="결과 확인하기"
          />
        }
      />
      <Route
        path="/match-fail"
        element={
          <ResultPage
            title="매칭 실패!"
            lion="crying"
            button="끝내기"
          />
        }
      />
      {/* <Route path="login" element={<Login />} /> 이런 식으로 본인이 만든 페이지 라우팅 설정하세용*/}
      {/* 자기가 만든 페이지 확인하고 싶으면 이거 연동 다 하고 주소 뒤에 jiyeon/login 처럼 입력하면 됨 */}
    </Routes>
  );
}
