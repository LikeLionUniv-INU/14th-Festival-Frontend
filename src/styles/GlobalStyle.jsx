// 페이지 전체에 적용되는 전역 스타일
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SUIT';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'SUIT';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'SUIT';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  
// 버튼 폰트
  @font-face {
    font-family:'NexonLv1Gothic';
    src: url('../fonts/NEXONLV1GothicBold.ttf') format('truetype');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family:'NexonLv1Gothic';
    src: url('../fonts/NEXONLV1GothicRegular.ttf') format('truetype');
    font-weight: 500;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'NexonLv1Gothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF Light.woff') format('woff');
    font-weight: 300;
    font-display: swap;
}


// 본문 폰트
@font-face {
    font-family: 'YeogiOttaeJalnan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-weight: normal;
    font-display: swap;
}

  /* 실제 화면 높이 변수 */
  :root {
    --vh: 1vh;
    --app-height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    /* 스크롤 방지 */
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: var(--app-height, 90vh);
    /* IOS 모멘텀 스크롤 방지 */
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: none;
    touch-action: none;
  }

  #root {
    height: var(--app-height, 90vh);
    max-height: var(--app-height, 90vh);
    overflow: hidden;
    position: relative;
  }

  body {
    font-family: 'YeogiOttaeJalnan', sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color:rgb(255, 255, 255);
    color: #333;  
    /* 터치 하이라이트 방지 */
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, textarea, select {
    font-family: inherit; 
  }

 button, p, h3 {
  color: #000000;
  background: none;
  border: none;

  font-family: 'NexonLv1Gothic', sans-serif;
  cursor: pointer;
}
`;

export default GlobalStyle;
