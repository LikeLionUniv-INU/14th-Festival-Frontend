import React, { useState } from 'react';
import styled from 'styled-components';
import TagBlock, { TagGrid } from './Components';

import Button from "../../components/common/Button";

import MessageCard from "../../components/common/MessageCard";

// 전체 페이지 감싸는 태그
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const MyTrait = () => {
  const [selected, setSelected] = useState([]);

  //함수로직 (클릭할때, 안할때)
  const toggleTag = (tag) => {
    if (selected.includes(tag)) {
      setSelected(selected.filter((item) => item !== tag));
    } else if (selected.length < 3) {
      setSelected([...selected, tag]);
    }
  };

  const traits = ["# 스포츠", "# 영화", "# 반려동물", "# 여행", "# 전시회", "# 러닝"
    , "# 맛집탐방", "# 자기계발", "# 애니메이션", "# 독서", "# 페스티벌"
    , "# 음악감상", "# 덕질", "# 보드게임", "# 스타일링"];

  return (
    <ButtonContainer>
      <MessageCard imageUrl="/assets/smallbasicLion.png" text="나의 관심사는?" />

      <TagGrid>
        {traits.map((text) => (
          <TagBlock
            key={text}
            label={text}
            isSelected={selected.includes(text)}
            onClick={() => toggleTag(text)}
          />
        ))}
      </TagGrid>

      <Button>다음</Button>

    </ButtonContainer>


  );
};

export default MyTrait;


