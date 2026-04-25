// 5. 남녀 선택 화면 (아현)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./SelectGender.styles";
import smallBasicLion from "../assets/images/lion/small-basic-lion.webp";
import ProgressBar from "../components/common/ProgressBar";
import Button from "../components/common/NextButton";
import MessageCard from "../components/common/MessageCard";
import SlideTransition from "../components/common/SlideTransition.jsx";
import { useSurvey } from "../contexts/SurveyContext.jsx";

const SelectGender = () => {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useSurvey();
  const [selectedGender, setSelectedGender] = useState(answers.gender ?? null);

  const handleNext = () => {
    if (!selectedGender) return;
    updateAnswer("gender", selectedGender);
    navigate("/my-animal");
  };

  return (
    <SlideTransition>
      <S.Container>
        <ProgressBar currentStep={1} totalSteps={5} />
        <S.Guide>
          <MessageCard imageUrl={smallBasicLion} text="성별을 선택해주세요" />
        </S.Guide>
        <S.BSection>
          <S.GenderButton
            onClick={() => setSelectedGender("male")}
            isSelected={selectedGender === "male"}
          >
            남성
          </S.GenderButton>
          <S.GenderButton
            onClick={() => setSelectedGender("female")}
            isSelected={selectedGender === "female"}
          >
            여성
          </S.GenderButton>
        </S.BSection>
        <S.NButton $isDisabled={!selectedGender}>
          <Button onClick={handleNext} disabled={!selectedGender}>
            다음
          </Button>
        </S.NButton>
      </S.Container>
    </SlideTransition>
  );
};

export default SelectGender;
