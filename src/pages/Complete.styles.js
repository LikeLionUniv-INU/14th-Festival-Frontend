// 4. ‘질문에 대한 답변’ 진행화면 (지연)
// 10. 질문 작성 완료 (지연)
// 13. 매칭 성공 (지연)
// 14. 매칭 실패 (지연)

import styled, { keyframes, css } from "styled-components";

export const Title = styled.h2`
  font-size: ${(props) => props.$fontSize || "40px"};
  font-weight: bold;
  line-height: 1.2;
  color: black;
  //text-shadow: 0.5px 0.5px 2px rgba(86, 86, 86, 0.3);
  text-align: center;
  white-space: pre-wrap;
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

//title 두 줄일 때
export const TypeTitleArea = styled.div`
  width: 100%;
  height: 76.8px;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 4vh;
`;

export const TypeLion = styled.div`
  margin: 43.6px 0 43.6px 0;
`;

export const TwoLineInfo = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  color: #787878;
  white-space: pre-wrap;
  margin-top: 20px;
`;

export const TypeButton = styled.div`
  margin-bottom: 2vh;
`;

//title 한줄일 때
export const SlideTitleArea = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 4vh;
  margin-bottom: 52.8px;
`;

export const SlideLion = styled.div`
  margin: 20px 0 20px 0;
`;

export const Info = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  color: #787878;
  white-space: pre-wrap;
`;

export const SlideButton = styled.div`
  margin-top: 52.8px;
  margin-bottom: 2vh;
`;
