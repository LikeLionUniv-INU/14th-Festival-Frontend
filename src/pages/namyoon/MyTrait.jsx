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

  const traits = ["# 에겐", "# 활발한", "# 털털한", "# 조용한", "# 유쾌한", "# 장난스러운"
    , "# 이성적인", "# 도전적인", "# 침착한", "# 솔직한", "# 섬세한"
    , "# 테토", "# 즉흥적인", "# 사교적인", "# 소심한"];

  return (
    <ButtonContainer>
      <MessageCard imageUrl="/assets/smallbasicLion.png" text="나의 성격은?" />

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


