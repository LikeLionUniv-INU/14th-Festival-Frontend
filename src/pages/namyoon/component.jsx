import React from "react";
import styled from "styled-components";




// 해시태그 블록 스타일 (이거 수정하면 동시에 해시태그 다 바뀜)
const Block = styled.button`
  width: 90px;
  height: 40px;
  color: black;
  cursor: pointer;
  border: ${(props) =>
    props.$isSelected
      ? "2px solid #F4A261"
      : "1px solid #ccc"};

  border-radius: 8px;
  

  transition: all 0.2s;

  background-color: ${(props) => (props.$isSelected ? "white" : "#e9e9e9")};

  
  box-shadow: ${(props) => (props.$isSelected ? '0 4px 6px rgba(0,0,0,0.1)' : 'none')};
  color: #333;

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
  column-gap: 16px;
  row-gap: 20px;

  width: 310px;
  margin: 50px auto 80px;
`;




export default TagBlock;
