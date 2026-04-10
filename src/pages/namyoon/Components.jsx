import React from "react";
import styled from "styled-components";


// 해시태그 블록 스타일 (이거 수정하면 동시에 해시태그 다 바뀜)
const Block = styled.button`
  width: 90px;
  height: 40px;
  font-size: 14px;
  -webkit-text-stroke: 0.5px; /* 글자 외곽선을 0.5px 그려서 강제로 굵게 만듦 */
  text-shadow: 0.2px 0.2px 0px;
  color: #A4612E;
  font-weight: 700;
  cursor: pointer;
  border: ${(props) =>
    props.$isSelected
      ? "1px solid #E69EA6"  /* 선택되었을 때: 두꺼운 주황색 테두리 */
      : "1px solid #ccc"};    /* 선택되지 않았을 때: 얇은 회색 테두리 */
  border-radius: 8px;
  

  transition: all 0.2s;

  background-color: ${(props) => (props.$isSelected ? '#FFFFFF' : '#F4D2D2')};

  
  box-shadow: ${(props) => (props.$isSelected ? '0 4px 6px rgba(0,0,0,0.1)' : 'none')};
  

  &:hover { opacity: 0.9; }

`;


// 해시태그 클릭했을 때 
const TagBlock = ({ label, isSelected, onClick }) => {
  return (
    <Block $isSelected={isSelected} onClick={onClick}>
      {label}
    </Block>
  );
};


// 3열로 해시태그 정렬
export const TagGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 30px;
  width: 100%;
  max-width: 320px;
  margin-top: 20px;
  margin-bottom: 50px;
`;





export default TagBlock;
