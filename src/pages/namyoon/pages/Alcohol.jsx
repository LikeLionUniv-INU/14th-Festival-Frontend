import React, { useState } from 'react';
import styled from 'styled-components';
import TagBlock, { GuideText, TagGrid } from '../Components';
import Button from "../../../components/common/Button";
import MessageCard from "../../../components/common/MessageCard";
import ProgressBar from "../../../components/common/ProgressBar";
import { Container, ButtonContainer } from '../styles/Alcohol.styles';

const Alcohol = () => {
  const [selected, setSelected] = useState([]);

  //함수로직 (클릭할때, 안할때)
  const toggleTag = (tag) => {
    if (selected.includes(tag)) {
      setSelected(selected.filter((item) => item !== tag));
    } else if (selected.length < 2) {
      setSelected([...selected, tag]);
    }
  };

  const AlcoholGrid = styled(TagGrid)`
  /* 1. 3열을 2열로 변경 */
  grid-template-columns: repeat(2, 1fr) !important;
  
  /* 2. 전체 그리드 너비를 피그마처럼 넓힘 */
  width: 100% !important;
  max-width: 360px !important; 
  column-gap: 20px !important; /* 가로 사이 간격 */
  row-gap: 30px !important;
  
  /* 3. 💥 중요: Components.jsx의 고정된 width/height를 강제로 무시 */
  & button {
    width: 100% !important;   /* 90px 고정을 무시하고 부모 너비에 꽉 채움 */
    height: 100px !important;  /* 40px 고정을 무시하고 피그마처럼 통통하게 */
    font-size: 16px !important; /* 글자 크기도 조금 더 시원하게 */
  }
`;

  const alcohols = ["# 소주", "# 맥주", "# 소맥", "# 하이볼", "# 위스키", "# 음료수"];

  return (
    <Container>
      <ProgressBar currentStep={4} totalSteps={5} />

      <MessageCard imageUrl="/assets/smallbasicLion.png" text="오늘 내가 먹고 싶은 술은..." />

      <GuideText>2개를 선택해주세요!</GuideText>

      <AlcoholGrid>
        {alcohols.map((text) => (
          <TagBlock
            key={text}
            label={text}
            isSelected={selected.includes(text)}
            onClick={() => toggleTag(text)}
            width="160px"
            height="100px"
          />
        ))}
      </AlcoholGrid>

      <ButtonContainer>
        <Button>다음</Button>
      </ButtonContainer>

    </Container>

  );
};

export default Alcohol;


