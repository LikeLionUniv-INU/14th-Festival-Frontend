import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --vh: 1vh;
    --app-height: 100vh;
    --font-main: 'NexonLv1Gothic', sans-serif;
    --font-point: 'YeogiOttaeJalnan', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-main); 
  }

  html, body {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: var(--app-height);
    background-color: #ffffff;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: none;
    touch-action: none;
  }

  #root {
    width: 100%;
    height: var(--app-height);
    overflow: hidden;
  }

  body {
    font-family: var(--font-main) !important;
    color: #333;
    -webkit-tap-highlight-color: transparent;
  }

  h1, h2, .point-text {
    font-family: var(--font-point);
  }

  button, p, h3, span, input, textarea {
    font-family: var(--font-main);
    color: #000000;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
