// 6. 질문1 - 본인 동물상 (남윤)
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TagBlock, { GuideText, TagGrid } from "../components/common/TagBlock";
import NextButton from "../components/common/NextButton.jsx";
import BackButton from "../components/common/BackButton.jsx";
import MessageCard from "../components/common/MessageCard";
import ProgressBar from "../components/common/ProgressBar";
import SlideTransition from "../components/common/SlideTransition.jsx";
import { Container, ButtonContainer } from "./MyAnimalPage.styles";
import smallBasicLion from "../assets/images/lion/small-basic-lion.webp";
import { useSurvey } from "../contexts/SurveyContext.jsx";

const MyAnimalGrid = styled(TagGrid)`
  /* 3열을 2열로 변경 */
  grid-template-columns: repeat(2, 1fr) !important;
`;

const MALE_ANIMALS = ["강아지", "고양이", "햄스터", "곰", "여우", "공룡"];
const FEMALE_ANIMALS = ["강아지", "고양이", "햄스터", "병아리", "토끼", "사슴"];

const MyAnimalPage = () => {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useSurvey();
  const [selected, setSelected] = useState(answers.animalType ?? []);

  const gender = answers.gender;
  const animalOptions = gender === "male" ? MALE_ANIMALS : FEMALE_ANIMALS;

  const isButtonActive = selected.length === 1;

  // 함수로직 (클릭할때, 안할때)
  const toggleTag = (tag) => {
    if (selected.includes(tag)) {
      setSelected(selected.filter((item) => item !== tag));
    } else if (selected.length < 1) {
      setSelected([...selected, tag]);
    }
  };

  const handleBack = () => {
    updateAnswer("animalType", selected);
    navigate("/gender");
  };

  const handleNext = () => {
    if (!isButtonActive) return;
    updateAnswer("animalType", selected);
    navigate("/interests");
  };

  return (
    <SlideTransition>
      <Container>
        <ProgressBar currentStep={2} totalSteps={5} />
        <MessageCard imageUrl={smallBasicLion} text="나와 가장 닮은 동물은?" />
        <GuideText>1개를 선택해 주세요!</GuideText>

        <MyAnimalGrid>
          {animalOptions.map((text) => (
            <TagBlock
              key={text}
              label={text}
              isSelected={selected.includes(text)}
              onClick={() => toggleTag(text)}
            />
          ))}
        </MyAnimalGrid>

        <ButtonContainer>
          <BackButton width="90%" onClick={handleBack}>
            이전
          </BackButton>
          <NextButton
            $width="90%"
            $active={isButtonActive}
            onClick={handleNext}
          >
            다음
          </NextButton>
        </ButtonContainer>
      </Container>
    </SlideTransition>
  );
};

export default MyAnimalPage;
