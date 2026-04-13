import { useNavigate } from "react-router-dom";
import * as I from "../styles/intropage.styles.js";

export default function IntroPage() {
  const navigate = useNavigate();

  return (
    <>
      <I.Container>
        <img src={`/assets/intro/ZooTing.png`} />
        <I.Info>{"#동물로 찾는 내 짝꿍 \n #키워드 소개팅"}</I.Info>
        <I.Logo src={`/assets/intro/Logo.png`} />
        <I.Intro_Button onClick={() => navigate("/ahyun/login")}>
          시작하기
        </I.Intro_Button>
      </I.Container>
    </>
  );
}
