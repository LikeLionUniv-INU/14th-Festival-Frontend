// 5. 남녀 선택 화면 (아현)

import styled from "styled-components";

export const NButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2dvh;
  /* 성별 선택 안 됐을 때 버튼 색 죽이기 */
  ${(props) =>
    props.$isDisabled &&
    `
    button {
      background-color: #d9d9d9 !important;
      color: #000000 !important;
      pointer-events: none !important;
      
    }
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100dvh;

  box-sizing: border-box;
`;

export const Guide = styled.div`
  display: flex;
  justify-content: center; // 가로 방향의 가운데로 아이템을 모음
  width: 100%;
`;

export const BSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5vw;
  height: 336px;
  width: 90%;
  margin: 20px 0 30px 0;
`;

export const GenderButton = styled.button`
  width: 166px;
  height: 210px;
  border-radius: 26px;
  font-size: 28px;
  font-weight: 400;
  border: 2px solid rgba(240, 197, 202, 1);
  transition: all 0.2s;
  //선택 여부에 따라 색 바꿈
  background-color: ${(props) =>
    props.isSelected ? "rgba(230, 158, 166, 1)" : "#FFFFFF"};
  color: ${(props) => (props.isSelected ? "#FFFFFF" : "rgba(161, 92, 41, 1)")};
`;
