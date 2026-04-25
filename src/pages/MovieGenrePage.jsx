// 8. 질문 3 - 영화 장르 (남윤)
import React, { useState } from "react";
import styled from "styled-components";
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
import { Container, ButtonContainer } from "./MovieGenrePage.styles.js";
import smallBasicLion from "../assets/images/lion/small-basic-lion.webp";
import { useSurvey } from "../contexts/SurveyContext.jsx";

const MovieGenreGrid = styled(TagGrid)`
  /* 3열을 2열로 변경 */
  grid-template-columns: repeat(2, 1fr);
`;

const MOVIE_GENRES = [
  "# 로맨스",
  "# 공포/스릴러",
  "# 코미디",
  "# 액션/느와르",
  "# 애니메이션",
  "# 판타지",
];

const MovieGenrePage = () => {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useSurvey();
  const [selected, setSelected] = useState(answers.movieGenres ?? []);

  const isButtonActive = selected.length === 2;

  // 함수로직 (클릭할때, 안할때)
  const toggleTag = (tag) => {
    if (selected.includes(tag)) {
      setSelected(selected.filter((item) => item !== tag));
    } else if (selected.length < 2) {
      setSelected([...selected, tag]);
    }
  };

  const handleBack = () => {
    updateAnswer("movieGenres", selected);
    navigate("/interests");
  };

  const handleNext = () => {
    if (!isButtonActive) return;
    updateAnswer("movieGenres", selected);
    navigate("/your-animal");
  };

  return (
    <SlideTransition>
      <Container>
        <ProgressBar currentStep={4} totalSteps={5} />
        <MessageCard
          imageUrl={smallBasicLion}
          text="내가 좋아하는 영화 장르는?"
        />
        <GuideText>2개를 선택해 주세요!</GuideText>

        <MovieGenreGrid>
          {MOVIE_GENRES.map((text) => (
            <TagBlock
              key={text}
              label={text}
              isSelected={selected.includes(text)}
              onClick={() => toggleTag(text)}
              width="160px"
              height="100px"
            />
          ))}
        </MovieGenreGrid>

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

export default MovieGenrePage;
