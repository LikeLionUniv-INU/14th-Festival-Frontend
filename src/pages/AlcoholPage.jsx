// 8. 질문 3 - 주종 (남윤)

import React, { useState } from "react";
import styled from "styled-components";
import TagBlock, { GuideText, TagGrid } from "../components/common/TagBlock";
import NextButton from "../components/common/NextButton.jsx";
import BackButton from "../components/common/BackButton.jsx";
import MessageCard from "../components/common/MessageCard";
import ProgressBar from "../components/common/ProgressBar";
import { Container, ButtonContainer } from "./AlcoholPage.styles";
import { useNavigate, useLocation } from "react-router-dom";
import smallBasicLion from "../assets/images/lion/small-basic-lion.webp";
import SlideTransition from "../components/common/SlideTransition.jsx";

const AlcoholPage = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();
  const gender = location.state?.gender;

  const isButtonActive = selected.length === 2;

  // 함수로직 (클릭할때, 안할때)
  const toggleTag = (tag) => {
    if (selected.includes(tag)) {
      setSelected(selected.filter((item) => item !== tag));
    } else if (selected.length < 2) {
      setSelected([...selected, tag]);
    }
  };

  const AlcoholGrid = styled(TagGrid)`
    /* 3열을 2열로 변경 */
    grid-template-columns: repeat(2, 1fr);
  `;

  const alcohols = [
    "# 로맨스",
    "# 공포/스릴러",
    "# 코미디",
    "# 액션/느와르",
    "# 애니메이션",
    "# 판타지",
  ];

  return (
    <SlideTransition>
      <Container>
        <ProgressBar currentStep={4} totalSteps={5} />

        <MessageCard
          imageUrl={smallBasicLion}
          text="내가 좋아하는 영화 장르는?"
        />

        <GuideText>2개를 선택해 주세요!</GuideText>

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
          <BackButton
            onClick={() => {
              navigate("/my-trait");
            }}
          >
            이전
          </BackButton>
          <NextButton
            $active={isButtonActive}
            onClick={() => {
              if (isButtonActive) {
                navigate("/your-animal", {
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

export default AlcoholPage;
