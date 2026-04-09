import React, { useState } from 'react';
import styled from 'styled-components';
import TagBlock, { TagGrid } from './Components';

const MyTrait = () => {
  const [selected, setSelected] = useState([]);

  const toggleTag = (tag) => {
    if (selected.includes(tag)) {
      setSelected(selected.filter((item) => item !== tag));
    } else if (selected.length < 3) {
      setSelected([...selected, tag]);
    }
  };

  const traits = ["# 에겐", "# 활발한", "# 털털한", "# 조용한", "# 유쾌한"];

  return (
    <>
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

    </>
  );
};

export default MyTrait;