import React from "react";
import styled from "styled-components";

// 해시태그 블록 스타일 (이거 수정하면 동시에 해시태그 다 바뀜)
const Block = styled.button`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  font-size: 14px;
  font-weight: 700;
  //text-shadow: 0.1px 0.1px 0px;
  color: ${(props) =>
    props.$isAnythingSelected ? "rgba(69,69,69,70)" : "#a4612e"};
  border: ${(props) =>
    props.$isSelected
      ? "1px solid #E69EA6" /* 선택되었을 때: 두꺼운 주황색 테두리 */
      : "1px solid #ccc"}; /* 선택되지 않았을 때: 얇은 회색 테두리 */
  border-radius: 8px;

  transition: all 0.2s;

  background-color: ${(props) =>
    props.$isAnythingSelected
      ? "#a6a6a6"
      : props.$isSelected
        ? "#FFFFFF"
        : "#F4D2D2"};

  box-shadow: ${(props) =>
    props.$isSelected ? "0 4px 6px rgba(0,0,0,0.1)" : "none"};

  &:hover {
    opacity: 0.9;
  }
`;

// 가이드 문장
export const GuideText = styled.p`
  width: 128px;
  height: 16px;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
`;

// 해시태그 클릭했을 때
const TagBlock = ({ label, isSelected, onClick, isAnythingSelected }) => {
  return (
    <Block
      $isSelected={isSelected}
      $isAnythingSelected={isAnythingSelected}
      onClick={onClick}
    >
      {label}
    </Block>
  );
};

// 3열로 해시태그블록 정렬
export const TagGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 15px;
  row-gap: 15px;
  height: 320px;
  width: 90%;
  margin: 20px 0 30px 0;
`;

export default TagBlock;
