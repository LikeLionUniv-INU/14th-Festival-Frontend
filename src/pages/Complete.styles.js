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

export const TitleArea = styled.div`
  width: 100%;
  height: calc(
    (${(props) => props.$fontSize || "40px"}) * 2 * 1.2
  ); // 글자 두 줄일 때 사진 안 밀리게
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 40px;
`;

export const Lion = styled.div`
  text-align: center;
  margin: 60.41px 0 60.41px 0;
  img {
    width: 83.33%;
  }
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

export const Container = styled.div`
  // 전체 텍스트, 사진, 버튼 그룹
  height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
