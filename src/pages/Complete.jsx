// 4. ‘질문에 대한 답변’ 진행화면 (지연)
// 10. 질문 작성 완료 (지연)
// 13. 매칭 성공 (지연)
// 14. 매칭 실패 (지연)

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/common/Button.jsx";
import * as S from "./Complete.styles.js";
import smileLion from "../assets/images/lion/smile-lion.png";
import heartLion from "../assets/images/lion/big-heart-lion.png";
import cryingLion from "../assets/images/lion/crying-lion.png";

function Complete({
  title,
  fontSize,
  lion = "smile",
  button,
  animation = "slideUp",
  info,
  onButtonClick,
}) {
  const isTypewriter = animation === "typewriter"; //타자기 효과

  const [displayedTitle, setDisplayedTitle] = useState(
    isTypewriter ? "" : title,
  );

  const lionImages = {
    smile: smileLion,
    heart: heartLion,
    crying: cryingLion,
  };

  useEffect(() => {
    if (!isTypewriter) {
      setDisplayedTitle(title);
      return;
    }

    let index = 0;
    setDisplayedTitle("");

    const interval = setInterval(() => {
      index += 1;
      setDisplayedTitle(title.slice(0, index));

      if (index >= title.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [title, isTypewriter]);

  return (
    <S.Container>
      <S.Box>
        {isTypewriter ? ( // typewriter 효과 적용시
          <S.TitleArea $fontSize={fontSize}>
            <S.Title
              $fontSize={fontSize}
              $animation={isTypewriter ? "none" : "slideUp"}
            >
              {displayedTitle}
            </S.Title>
          </S.TitleArea>
        ) : (
          // slideUp 효과 적용 시
          <S.Title $fontSize={fontSize} $animation="slideUp">
            {displayedTitle}
          </S.Title>
        )}

        <S.Lion>
          <img src={lionImages[lion]} />
        </S.Lion>
      </S.Box>
      <S.Info>{info}</S.Info>
      {button && <Button onClick={onButtonClick}>{button}</Button>}
    </S.Container>
  );
}

export default Complete;
