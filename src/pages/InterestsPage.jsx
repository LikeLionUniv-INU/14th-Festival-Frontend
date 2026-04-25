// 7. 질문 2 - 관심사 (남윤)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TagBlock, {
  GuideText,
  TagGrid,
} from "../components/common/TagBlock.jsx";
import NextButton from "../components/common/NextButton.jsx";
import BackButton from "../components/common/BackButton.jsx";
import MessageCard from "../components/common/MessageCard.jsx";
import ProgressBar from "../components/common/ProgressBar.jsx";
import SlideTransition from "../components/common/SlideTransition.jsx";
import { Container, ButtonContainer } from "./InterestsPage.styles.js";
import smallBasicLion from "../assets/images/lion/small-basic-lion.webp";
import { useSurvey } from "../contexts/SurveyContext.jsx";

const INTERESTS = [
  "# 스포츠",
  "# 뮤지컬/연극",
  "# 반려동물",
  "# 여행",
  "# 맛집탐방",
  "# 자기계발",
  "# 덕질",
  "# 음악감상",
  "# 게임",
];

const InterestsPage = () => {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useSurvey();
  const [selected, setSelected] = useState(answers.interests ?? []);

  const isButtonActive = selected.length === 3;

  // 함수로직 (클릭할때, 안할때)
  const toggleTag = (tag) => {
    if (selected.includes(tag)) {
      setSelected(selected.filter((item) => item !== tag));
    } else if (selected.length < 3) {
      setSelected([...selected, tag]);
    }
  };

  const handleBack = () => {
    updateAnswer("interests", selected);
    navigate("/my-animal");
  };

  const handleNext = () => {
    if (!isButtonActive) return;
    updateAnswer("interests", selected);
    navigate("/movie-genre");
  };

  return (
    <SlideTransition>
      <Container>
        <ProgressBar currentStep={3} totalSteps={5} />
        <MessageCard imageUrl={smallBasicLion} text="내가 관심 있는 건..?" />
        <GuideText>3개를 선택해 주세요!</GuideText>

        <TagGrid>
          {INTERESTS.map((text) => (
            <TagBlock
              key={text}
              label={text}
              isSelected={selected.includes(text)}
              onClick={() => toggleTag(text)}
            />
          ))}
        </TagGrid>

        <ButtonContainer $active={isButtonActive}>
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

export default InterestsPage;
