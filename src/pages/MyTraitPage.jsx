// 7. 질문 2 - 관심사 (남윤)

import React, { useState } from "react";
import styled from "styled-components";
import TagBlock, { GuideText, TagGrid } from "../components/common/TagBlock";
import Button from "../components/common/Button";
import MessageCard from "../components/common/MessageCard";
import ProgressBar from "../components/common/ProgressBar";
import { useNavigate } from "react-router-dom";
import { Container, ButtonContainer } from "./MyTraitPage.styles";
import smallBasicLion from "../assets/images/lion/small-basic-lion.png";

const MyTraitPage = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

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
    "# 영화",
    "# 반려동물",
    "# 여행",
    "# 맛집탐방",
    "# 자기계발",
    "# 덕질",
    "# 음악감상",
    "# 보드게임",
  ];

  return (
    <Container>
      <ProgressBar currentStep={3} totalSteps={5} />

      <MessageCard imageUrl={smallBasicLion} text="내가 관심 있는 건..?" />

      <GuideText>3개를 선택해주세요!</GuideText>

      <TagGrid>
        {Traits.map((text) => (
          <TagBlock
            key={text}
            label={text}
            isSelected={selected.includes(text)}
            onClick={() => toggleTag(text)}
            width="100px"
            height="100px"
          />
        ))}
      </TagGrid>

      <ButtonContainer $active={isButtonActive}>
        <Button
          onClick={() => {
            if (isButtonActive) {
              navigate("/alcohol");
            }
          }}
        >다음</Button>
      </ButtonContainer>
    </Container>
  );
};

export default MyTraitPage;
