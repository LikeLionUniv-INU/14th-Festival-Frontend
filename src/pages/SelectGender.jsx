// 5. 남녀 선택 화면 (아현)

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./SelectGender.styles";
import smallBasicLion from "../assets/images/lion/small-basic-lion.webp";
import ProgressBar from "../components/common/ProgressBar";
// 공통 버튼 불러오기
import Button from "../components/common/Button";
import MessageCard from "../components/common/MessageCard";

const SelectGender = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const navigate = useNavigate();

  return (
    <S.Container>
      <ProgressBar currentStep={1} totalSteps={5} />
      <S.Guide>
        <MessageCard imageUrl={smallBasicLion} text="성별을 선택해 주세요" />
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
        <Button
          onClick={() => navigate("/my-animal")}
          disabled={!selectedGender}
        >
          다음
        </Button>
      </S.NButton>
    </S.Container>
  );
};

export default SelectGender;
