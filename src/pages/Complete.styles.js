// 4. ‘질문에 대한 답변’ 진행화면 (지연)
// 10. 질문 작성 완료 (지연)
// 13. 매칭 성공 (지연)
// 14. 매칭 실패 (지연)

import styled, { keyframes, css } from "styled-components";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Title = styled.h2`
  font-size: ${(props) => props.$fontSize || "40px"};
  font-weight: bold;
  line-height: 1.2;
  color: black;
  //text-shadow: 0.5px 0.5px 2px rgba(86, 86, 86, 0.3);
  text-align: center;
  white-space: pre-wrap;

  ${(props) =>
    props.$animation === "slideUp" &&
    css`
      opacity: 0;
      transform: translateY(60px);
      animation: ${slideUp} 1s ease-out forwards;
    `}
`;

//typewriter 효과 적용시
export const TypeTitleArea = styled.div`
  width: 100%;
  height: 76.8px;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 4vh;
`;


export const TypeLion = styled.div`
  margin: 81.6px 0 81.6px 0;
`;


//slideup 효과 적용시
export const SlideTitleArea = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 4vh;
`;


export const SlideLion = styled.div`
  margin: 96px 0 36px 0;
`;

export const Info = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  color: black;
  margin-bottom: 60px;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 2vh;
`

export const Container = styled.div`
  // 전체 텍스트, 사진, 버튼 그룹
  height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
