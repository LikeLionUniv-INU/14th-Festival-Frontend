// 6. 질문4 - 상대 동물상 (남윤)
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TagBlock, { GuideText, TagGrid } from "../components/common/TagBlock";
import NextButton from "../components/common/NextButton.jsx";
import BackButton from "../components/common/BackButton.jsx";
import MessageCard from "../components/common/MessageCard";
import ProgressBar from "../components/common/ProgressBar";
import SlideTransition from "../components/common/SlideTransition.jsx";
import { Container, ButtonContainer, Anything } from "./MyAnimalPage.styles";
import smallBasicLion from "../assets/images/lion/small-basic-lion.webp";
import { useSurvey } from "../contexts/SurveyContext.jsx";

const MyAnimalGrid = styled(TagGrid)`
  /* 3열을 2열로 변경 */
  grid-template-columns: repeat(2, 1fr) !important;
  height: 300px;
  margin-bottom: 15px;
`;

const MALE_ANIMALS = ["강아지", "고양이", "햄스터", "곰", "원숭이", "공룡"];
const FEMALE_ANIMALS = ["강아지", "고양이", "햄스터", "병아리", "토끼", "사슴"];

const YourAnimalPage = () => {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useSurvey();
  const [selected, setSelected] = useState(answers.preferredAnimals ?? []);

  const gender = answers.gender;
  const animalOptions = gender === "male" ? FEMALE_ANIMALS : MALE_ANIMALS;

  // 함수로직 (클릭할때, 안할때)
  const toggleTag = (tag) => {
    if (tag === "상관없음") {
      setSelected(["상관없음"]);
      return;
    }

    if (selected.includes("상관없음")) {
      setSelected([tag]);
      return;
    }

    if (selected.includes(tag)) {
      setSelected(selected.filter((item) => item !== tag));
    } else if (selected.length < 3) {
      setSelected([...selected, tag]);
    }
  };

  const isAnythingSelected = selected.includes("상관없음");
  const isButtonActive = selected.length === 3 || isAnythingSelected;

  const handleBack = () => {
    updateAnswer("preferredAnimals", selected);
    navigate("/movie-genre");
  };

  const handleNext = () => {
    if (!isButtonActive) return;
    updateAnswer("preferredAnimals", selected);
    navigate("/choice-done");
  };

  return (
    <SlideTransition>
      <Container>
        <ProgressBar currentStep={5} totalSteps={5} />
        <MessageCard
          imageUrl={smallBasicLion}
          text="내가 원하는 상대의 동물상은?"
        />

        <GuideText>3개를 선택해 주세요!</GuideText>
        <MyAnimalGrid>
          {animalOptions.map((text) => (
            <TagBlock
              key={text}
              label={text}
              isSelected={selected.includes(text)}
              isAnythingSelected={isAnythingSelected}
              onClick={() => toggleTag(text)}
            />
          ))}
        </MyAnimalGrid>

        <Anything
          $selected={selected.includes("상관없음")}
          onClick={() => toggleTag("상관없음")}
        >
          상관없음
        </Anything>

        <ButtonContainer
          $active={isButtonActive}
          $selected={isAnythingSelected}
        >
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

export default YourAnimalPage;
