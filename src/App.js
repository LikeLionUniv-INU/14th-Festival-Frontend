// 건들지마시오
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Layout from "./components/common/Layout";

import AlcoholPage from "./pages/AlcoholPage";
import IntroPage from "./pages/Intro";
import Login from "./pages/Login";
import MatchResultPage from "./pages/MatchResultPage";
import MyAnimalPage from "./pages/MyAnimalPage";
import MyTraitPage from "./pages/MyTraitPage";
import QuestionPage from "./pages/QuestionPages";
import ResultCheckPage from "./pages/ResultCheckPage";
import SelectGender from "./pages/SelectGender";
import SelectPage from "./pages/SelectPages";
import YourAnimalPage from "./pages/YourAnimalPage";
import Profile from "./pages/Profile";

function App() {
  // 모바일 브라우저 높이 계산
  useEffect(() => {
    const setScreenSize = () => {
      const vh = window.innerHeight * 0.01;
      // CSS 변수에 실제 높이 값 넣어주기
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`,
      );
    };

    setScreenSize();
  }, []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<IntroPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/gender" element={<SelectGender />} />
            <Route
              path="/lets-choice"
              element={
                <QuestionPage
                  title={"질문에 대한\n답변을 선택해줘!"}
                  button="시작하기"
                />
              }
            />
            <Route path="/my-animal" element={<MyAnimalPage />} />
            <Route path="/my-trait" element={<MyTraitPage />} />
            <Route path="/alcohol" element={<AlcoholPage />} />
            <Route path="/your-animal" element={<YourAnimalPage />} />
            <Route
              path="/choice-done"
              element={<SelectPage title="작성 완료!" button="다음" />}
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/result" element={<ResultCheckPage />} />
            <Route
              path="/match-success"
              element={
                <MatchResultPage
                  title="매칭 성공!"
                  lion="heart"
                  button="결과 확인하기"
                  isSuccess={true}
                />
              }
            />
            <Route
              path="/match-fail"
              element={
                <MatchResultPage
                  title="매칭 실패!"
                  lion="crying"
                  info="내일 다시 참여할 수 있어요!"
                  button="끝내기"
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
