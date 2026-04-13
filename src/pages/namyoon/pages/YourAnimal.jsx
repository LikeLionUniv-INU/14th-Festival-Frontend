import React, { useState } from 'react';
import styled from 'styled-components';
import TagBlock, { GuideText, TagGrid } from '../Components';
import Button from "../../../components/common/Button";
import MessageCard from "../../../components/common/MessageCard";
import ProgressBar from "../../../components/common/ProgressBar";
import { Container, ButtonContainer } from '../styles/MyAnimal.styles';
import { useNavigate } from 'react-router-dom';

const YourAnimal = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  // 함수로직 (클릭할때, 안할때)
  const toggleTag = (tag) => {
    if (selected.includes(tag)) {
      setSelected(selected.filter((item) => item !== tag));
    } else if (selected.length < 1) {
      setSelected([...selected, tag]);
    }
  };

  const MyAnimalGrid = styled(TagGrid)`
  /* 3열을 2열로 변경 */
  grid-template-columns: repeat(2, 1fr) !important;
  
  width: 100% !important;
  max-width: 340px !important; 
  column-gap: 20px !important; /* 가로 사이 간격 */
  //row-gap: 20px !important;
  align-content: space-between;
`;

  const MyAnimals = ["# 강아지", "# 고양이", "# 곰", "# 원숭이", "# 토끼", "# 말", "# 공룡", "# 병아리"];

  return (
    <Container>
      <ProgressBar currentStep={5} totalSteps={5} />

      <MessageCard imageUrl="/assets/smallbasicLion.png" text="내가 원하는 상대의 동물은?" />

      <GuideText>1개를 선택해주세요!</GuideText>

      <MyAnimalGrid>
        {MyAnimals.map((text) => (
          <TagBlock
            key={text}
            label={text}
            isSelected={selected.includes(text)}
            onClick={() => toggleTag(text)}
            width="160px"
            height="60px"
          />
        ))}
      </MyAnimalGrid>

      <ButtonContainer>
        <Button >다음</Button>
      </ButtonContainer>

    </Container>

  );
};

export default YourAnimal;


