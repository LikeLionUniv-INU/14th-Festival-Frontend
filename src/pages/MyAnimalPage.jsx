// 6. 질문1 - 본인 동물상 (남윤)

import React, { useState } from "react";
import styled from "styled-components";
import TagBlock, { GuideText, TagGrid } from "../components/common/TagBlock";
import NextButton from "../components/common/NextButton.jsx";
import BackButton from "../components/common/BackButton.jsx";
import MessageCard from "../components/common/MessageCard";
import ProgressBar from "../components/common/ProgressBar";
import { Container, ButtonContainer } from "./MyAnimalPage.styles";
import { useLocation, useNavigate } from "react-router-dom";
import smallBasicLion from "../assets/images/lion/small-basic-lion.webp";
import SlideTransition from "../components/common/SlideTransition.jsx";

const MyAnimalPage = () => {
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

  const MyAnimalGrid = styled(TagGrid)`
    /* 3열을 2열로 변경 */
    grid-template-columns: repeat(2, 1fr) !important;
  `;

  const MyAnimals = gender === "male" ? maleAnimals : femaleAnimals;

  const isButtonActive = selected.length === 1;

  // 함수로직 (클릭할때, 안할때)
  const toggleTag = (tag) => {
    if (selected.includes(tag)) {
      setSelected(selected.filter((item) => item !== tag));
    } else if (selected.length < 1) {
      setSelected([...selected, tag]);
    }
  };

  return (
    <SlideTransition>
      <Container>
        <ProgressBar currentStep={2} totalSteps={5} />

        <MessageCard imageUrl={smallBasicLion} text="나와 가장 닮은 동물은?" />

        <GuideText>1개를 선택해 주세요!</GuideText>

        <MyAnimalGrid>
          {MyAnimals.map((text) => (
            <TagBlock
              key={text}
              label={text}
              isSelected={selected.includes(text)}
              onClick={() => toggleTag(text)}
            />
          ))}
        </MyAnimalGrid>

        <ButtonContainer>
          <BackButton
            onClick={() => {
              navigate("/gender");
            }}
          >
            이전
          </BackButton>
          <NextButton
            $active={isButtonActive}
            onClick={() => {
              if (isButtonActive) {
                navigate("/my-trait", {
                  state: { gender },
                });
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

export default MyAnimalPage;
