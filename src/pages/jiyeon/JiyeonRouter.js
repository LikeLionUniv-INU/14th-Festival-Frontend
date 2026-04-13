// 지연 전용 라우팅 파일
// 라우팅을 App.js에 하지 말고 여기서!
// import Login from "./Login"; 이런 식으로 본인이 만든 페이지 불러와서
// JiyeonRouter.jsx
// path마다 "어떤 그룹 페이지 컴포넌트"를 쓸지만 연결

import { Routes, Route } from "react-router-dom";
import SelectPage from "./pages/SelectPages";
import QuestionPage from "./pages/QuestionPages";
import ResultPage from "./pages/ResultPages";
import IntroPage from "./pages/IntroPage";

export default function JiyeonRouter() {
  return (
    <Routes>
      {/* IntroPage.jsx */}
      <Route path="intro" element={<IntroPage />} />

      {/* SelectPage.jsx */}
      <Route
        path="/choice-done"
        element={<SelectPage title="작성 완료!" button="다음" />}
      />

      {/* QuestionPage.jsx */}
      <Route
        path="/lets-choice"
        element={
          <QuestionPage
            title={"질문에 대한\n답변을 선택해줘!"}
            button="시작하기"
          />
        }
      />

      {/* ResultPage.jsx */}
      <Route
        path="/match-success"
        element={
          <ResultPage
            title="매칭 성공!"
            lion="bigheart"
            button="결과 확인하기"
            isSuccess={true}
          />
        }
      />
      <Route
        path="/match-fail"
        element={
          <ResultPage title="매칭 실패!" lion="crying" button="끝내기" />
        }
      />

      {/* <Route path="login" element={<Login />} /> 이런 식으로 본인이 만든 페이지 라우팅 설정하세용*/}
      {/* 자기가 만든 페이지 확인하고 싶으면 이거 연동 다 하고 주소 뒤에 jiyeon/login 처럼 입력하면 됨 */}
    </Routes>
  );
}
