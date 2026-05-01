import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Layout from "./components/common/Layout";
import { SurveyProvider } from "./contexts/SurveyContext";
import { Analytics } from "@vercel/analytics/react";

import MovieGenrePage from "./pages/MovieGenrePage";
import IntroPage from "./pages/Intro";
import Login from "./pages/Login";
import MatchResultPage from "./pages/MatchResultPage";
import MyAnimalPage from "./pages/MyAnimalPage";
import InterestsPage from "./pages/InterestsPage";
import QuestionPage from "./pages/QuestionPages";
import ResultCheckPage from "./pages/ResultCheckPage";
import SelectGender from "./pages/SelectGender";
import SelectPage from "./pages/SelectPages";
import YourAnimalPage from "./pages/YourAnimalPage";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

// 뒤로가기 방지
function BackBlocker() {
  const location = useLocation();
  const currentPathRef = useRef("");

  useEffect(() => {
    currentPathRef.current =
      location.pathname + location.search + location.hash;

    window.history.pushState(null, "", currentPathRef.current);
  }, [location]);

  useEffect(() => {
    const blockBack = () => {
      window.history.pushState(null, "", currentPathRef.current);
    };

    window.addEventListener("popstate", blockBack);

    return () => {
      window.removeEventListener("popstate", blockBack);
    };
  }, []);

  return null;
}

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
      <SurveyProvider>
        <GlobalStyle />
        <BrowserRouter>
          <BackBlocker />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<IntroPage />} />
              <Route path="/login" element={<Login />} />
              // 토큰 없으면 로그인 페이지로, 토큰 있으면 원래 가려던 페이지로
              <Route element={<ProtectedRoute />}>
                <Route path="/gender" element={<SelectGender />} />
                <Route
                  path="/lets-choice"
                  element={
                    <QuestionPage
                      title={"질문에 대한 답변을\n 선택해 주세요!"}
                      twolineinfo={"선택한 답변을 바탕으로\n 매칭이 진행돼요!"}
                      button="시작하기"
                    />
                  }
                />
                <Route path="/my-animal" element={<MyAnimalPage />} />
                <Route path="/interests" element={<InterestsPage />} />
                <Route path="/movie-genre" element={<MovieGenrePage />} />
                <Route path="/your-animal" element={<YourAnimalPage />} />
                <Route
                  path="/choice-done"
                  element={
                    <SelectPage
                      title="작성 완료!"
                      topinfo="&nbsp;"
                      bottominfo="&nbsp;"
                      button="다음"
                    />
                  }
                />
                <Route path="/profile" element={<Profile />} />
                <Route path="/result" element={<ResultCheckPage />} />
                <Route
                  path="/match-success"
                  element={
                    <MatchResultPage
                      title="매칭 성공!"
                      topinfo="&nbsp;"
                      lion="heart"
                      bottominfo="나와 잘 맞는 상대를 찾았어요!"
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
                      topinfo="원하는 상대를 찾지 못했어요."
                      lion="crying"
                      bottominfo="내일 다시 참여할 수 있어요!"
                      button="끝내기"
                    />
                  }
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </SurveyProvider>
      <Analytics />
    </>
  );
}

export default App;
