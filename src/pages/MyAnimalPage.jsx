// 6. 질문1 - 본인 동물상 (남윤)

import React, { useState } from "react";
import styled from "styled-components";
import TagBlock, { GuideText, TagGrid } from "../components/common/TagBlock";
import Button from "../components/common/Button";
import MessageCard from "../components/common/MessageCard";
import ProgressBar from "../components/common/ProgressBar";
import { Container, ButtonContainer } from "./MyAnimalPage.styles";
import { useNavigate } from "react-router-dom";
import smallBasicLion from "../assets/images/lion/small-basic-lion.png";

const MyAnimalPage = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const isButtonActive = selected.length === 1;

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
  `;

  const MyAnimals = [
    "# 강아지",
    "# 고양이",
    "# 곰",
    "# 원숭이",
    "# 토끼",
    "# 말",
    "# 공룡",
    "# 병아리",
  ];

  return (
    <Container>
      <ProgressBar currentStep={2} totalSteps={5} />

      <MessageCard imageUrl={smallBasicLion} text="나와 가장 닮은 동물은?" />

      <GuideText>1개를 선택해주세요!</GuideText>

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

      <ButtonContainer $active={isButtonActive}>
        <Button
          onClick={() => {
            if (isButtonActive) {
              navigate("/my-trait");
            }
          }}
        >
          다음
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default MyAnimalPage;
