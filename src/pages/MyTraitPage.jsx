// 7. 질문 2 - 관심사 (남윤)

import React, { useState } from "react";
import styled from "styled-components";
import TagBlock, { GuideText, TagGrid } from "../components/common/TagBlock";
import NextButton from "../components/common/NextButton.jsx";
import BackButton from "../components/common/BackButton.jsx";
import MessageCard from "../components/common/MessageCard";
import ProgressBar from "../components/common/ProgressBar";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, ButtonContainer } from "./MyTraitPage.styles";
import smallBasicLion from "../assets/images/lion/small-basic-lion.webp";
import SlideTransition from "../components/common/SlideTransition.jsx";

const MyTraitPage = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();
  const gender = location.state?.gender;

  const isButtonActive = selected.length === 3;

  //함수로직 (클릭할때, 안할때)
  const toggleTag = (tag) => {
    if (selected.includes(tag)) {
      setSelected(selected.filter((item) => item !== tag));
    } else if (selected.length < 3) {
      setSelected([...selected, tag]);
    }
  };

  const Traits = [
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

  return (
    <SlideTransition>
      <Container>
        <ProgressBar currentStep={3} totalSteps={5} />

        <MessageCard imageUrl={smallBasicLion} text="내가 관심 있는 건..?" />

        <GuideText>3개를 선택해 주세요!</GuideText>

        <TagGrid>
          {Traits.map((text) => (
            <TagBlock
              key={text}
              label={text}
              isSelected={selected.includes(text)}
              onClick={() => toggleTag(text)}
            />
          ))}
        </TagGrid>

        <ButtonContainer $active={isButtonActive}>
          <BackButton
            onClick={() => {
              navigate("/my-animal");
            }}
          >
            이전
          </BackButton>
          <NextButton
            $active={isButtonActive}
            onClick={() => {
              if (isButtonActive) {
                navigate("/alcohol", {
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

export default MyTraitPage;
