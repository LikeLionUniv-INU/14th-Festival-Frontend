import React, { useState } from 'react';
import styled from 'styled-components';
import TagBlock, { GuideText, TagGrid } from './Components';
import Button from "../../components/common/Button";
import MessageCard from "../../components/common/MessageCard";
import ProgressBar from "../../components/common/ProgressBar";

// 전체 페이지 감싸는 태그
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  height: 100dvh; 
  
  justify-content: center; 

  padding: 6dvh 20px; 
  box-sizing: border-box;
  background-color: #FFFDF5; 

  gap: 2dvh;

  margin-bottom: 20px;
`;

const ButtonContainer = styled.button`
  margin-bottom: 2dvh;
`;

const MyTrait = () => {
  const [selected, setSelected] = useState([]);

  //함수로직 (클릭할때, 안할때)
  const toggleTag = (tag) => {
    if (selected.includes(tag)) {
      setSelected(selected.filter((item) => item !== tag));
    } else if (selected.length < 3) {
      setSelected([...selected, tag]);
    }
  };

  const traits = ["# 스포츠", "# 영화", "# 반려동물", "# 여행"
    , "# 맛집탐방", "# 자기계발"
    , "# 덕질", "# 음악감상", "# 보드게임"];

  return (
    <Container>

      <ProgressBar currentStep={3} totalSteps={5} />

      <MessageCard imageUrl="/assets/smallbasicLion.png" text="내가 관심 있는 건..?" />

      <GuideText>3개를 선택해주세요!</GuideText>

      <TagGrid>
        {traits.map((text) => (
          <TagBlock
            key={text}
            label={text}
            isSelected={selected.includes(text)}
            onClick={() => toggleTag(text)}
          />
        ))}
      </TagGrid>

      <ButtonContainer>
        <Button>다음</Button>
      </ButtonContainer>


    </Container>


  );
};

export default MyTrait;


