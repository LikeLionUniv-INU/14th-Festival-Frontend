// 6. 질문4 - 상대 동물상 (남윤)

import React, { useState } from "react";
import styled from "styled-components";
import TagBlock, { GuideText, TagGrid } from "../components/common/TagBlock";
import NextButton from "../components/common/NextButton.jsx";
import BackButton from "../components/common/BackButton.jsx";
import MessageCard from "../components/common/MessageCard";
import ProgressBar from "../components/common/ProgressBar";
import { Container, ButtonContainer, Anything } from "./MyAnimalPage.styles";
import { useNavigate, useLocation } from "react-router-dom";
import smallBasicLion from "../assets/images/lion/small-basic-lion.webp";
import SlideTransition from "../components/common/SlideTransition.jsx";

const MyAnimalGrid = styled(TagGrid)`
  /* 3열을 2열로 변경 */
  grid-template-columns: repeat(2, 1fr) !important;
  height: 300px;
  margin-bottom: 15px;
`;

const YourAnimalPage = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();
  const gender = location.state?.gender;

  const maleAnimals = ["강아지", "고양이", "햄스터", "곰", "원숭이", "공룡"];
  const femaleAnimals = [
    "강아지",
    "고양이",
    "햄스터",
    "병아리",
    "토끼",
    "사슴",
  ];

  const MyAnimals = gender === "male" ? femaleAnimals : maleAnimals;

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

  const isButtonActive = selected.length === 3 || selected.includes("상관없음");

  const isAnythingSelected = selected.includes("상관없음");

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
          {MyAnimals.map((text) => (
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
          <BackButton
            width="90%"
            onClick={() => {
              navigate("/alcohol");
            }}
          >
            이전
          </BackButton>
          <NextButton
            $width="90%"
            $active={isButtonActive}
            onClick={() => {
              if (isButtonActive) {
                navigate("/choice-done");
              }
            }}
          >
            다음
          </NextButton>
        </ButtonContainer>
      </Container>
    </SlideTransition>
  );
};

export default YourAnimalPage;
