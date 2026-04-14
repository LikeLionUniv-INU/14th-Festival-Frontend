// 5. 남녀 선택 화면 (아현)

import styled from "styled-components";

export const NButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // 위아래 여백이 똑같아지도록 수직 정렬.
  width: 100%;

  justify-content: flex-start; // 가로 방향의 시작점으로 아이템들을 붙임
  gap: 50px;
  padding: 60px 0;
  background-color: transparent;
  box-sizing: border-box;
`;

export const Guide = styled.div`
  display: flex;
  justify-content: center; // 가로 방향의 가운데로 아이템을 모음
  width: 100%;
`;

export const BSection = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  height: 360px;
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
