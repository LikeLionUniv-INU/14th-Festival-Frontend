// 지연 전용 라우팅 파일
// 라우팅을 App.js에 하지 말고 여기서!
import { Routes, Route } from "react-router-dom";
import Complete from "./Complete"
import { selectPages, questionPages, resultPages } from "./pages/pageData"
// import Login from "./Login"; 이런 식으로 본인이 만든 페이지 불러와서

export default function JiyeonRouter() {
  return (
    <Routes>
      {selectPages.map((page) => (
        <Route
          key={page.path}
          path={page.path}
          element={<Complete {...page} />}
        />
      ))}

      {questionPages.map((page) => (
        <Route
          key={page.path}
          path={page.path}
          element={<Complete {...page} />}
        />
      ))}

      {resultPages.map((page) => (
        <Route
          key={page.path}
          path={page.path}
          element={<Complete {...page} />}
        />
      ))}
      
      {/* <Route path="login" element={<Login />} /> 이런 식으로 본인이 만든 페이지 라우팅 설정하세용*/}
      {/* 자기가 만든 페이지 확인하고 싶으면 이거 연동 다 하고 주소 뒤에 jiyeon/login 처럼 입력하면 됨 */}
    </Routes>
  );
}
