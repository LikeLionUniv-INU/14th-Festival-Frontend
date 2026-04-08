// 건들지마시오
import { react, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Layout from "./components/common/Layout";
import AhyunRouter from "./pages/ahyun/AhyunRouter";
import JiyeonRouter from "./pages/jiyeon/JiyeonRouter";
import NamyoonRouter from "./pages/namyoon/NamyoonRouter";

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
        <Layout />
        <Routes>
          <Route path="/ahyun/*" element={<AhyunRouter />} />
          <Route path="/jiyeon/*" element={<JiyeonRouter />} />
          <Route path="/namyoon/*" element={<NamyoonRouter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
