// 1. 입장 화면 (지연)

import { useNavigate } from "react-router-dom";
import * as I from "./Intro.styles";
import zooting from "../assets/images/intro/zooting.png";
import logo from "../assets/images/intro/logo.png";
import PopTransition from "../components/common/PopTransition.jsx";

export default function IntroPage() {
  const navigate = useNavigate();

  return (
    <>
      <PopTransition>
        <I.Container>
          <img width="90%" src={zooting} />
          <I.Info>{"#동물로 찾는 내 짝꿍 \n #키워드 소개팅"}</I.Info>
          <I.Logo src={logo} />
          <I.Intro_Button onClick={() => navigate("login")}>
            시작하기
          </I.Intro_Button>
        </I.Container>
      </PopTransition>
    </>
  );
}
