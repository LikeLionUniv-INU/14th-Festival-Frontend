// 4. ‘질문에 대한 답변’ 진행화면 (지연)
// 10. 질문 작성 완료 (지연)
// 13. 매칭 성공 (지연)
// 14. 매칭 실패 (지연)

import React, { useEffect, useState } from "react";
import Button from "../components/common/Button.jsx";
import * as S from "./Complete.styles.js";
import smileLion from "../assets/images/lion/smile-lion.webp";
import heartLion from "../assets/images/lion/big-heart-lion.webp";
import cryingLion from "../assets/images/lion/crying-lion.webp";
import { ButtonContainer } from "./MyAnimalPage.styles.js";

function Complete({
  title,
  fontSize,
  lion = "smile",
  button,
  animation = "slideUp",
  info,
  onButtonClick,
}) {
  // 타자기 효과
  const isTypewriter = animation === "typewriter";

  const [displayedTitle, setDisplayedTitle] = useState(
    isTypewriter ? "" : title,
  );

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

  // 사진 바꿔끼기
  const lionImages = {
    smile: smileLion,
    heart: heartLion,
    crying: cryingLion,
  };

  // Info 금요일 비활성화
  const today = new Date().getDay(); //일: 0, ..., 금: 5, 토: 6
  const isFriday = today === 5;

  return (
    <S.Container>
      {isTypewriter ? (
        // typewriter 효과 적용시
        <>
          <S.typeTitleArea $fontSize={fontSize}>
            <S.Title
              $fontSize={fontSize}
              $animation={isTypewriter ? "none" : "slideUp"}
            >
              {displayedTitle}
            </S.Title>
          </S.typeTitleArea>
          <S.typeLion>
            <img src={lionImages[lion]} />
          </S.typeLion>
          <S.ButtonContainer>
            {button && (
              <Button onClick={onButtonClick} >
                {button}
              </Button>
            )}
          </S.ButtonContainer></>
      ) : (
        // slideUp 효과 적용 시
        <>
          <S.slideTitleArea>
            <S.Title $fontSize={fontSize} $animation="slideUp">
              {displayedTitle}
            </S.Title>
          </S.slideTitleArea>

          <S.slideLion>
            <img src={lionImages[lion]} />
          </S.slideLion>

          {!isFriday && <S.Info>{info}</S.Info>}
          <S.ButtonContainer>
            {button && (
              <Button onClick={onButtonClick} >
                {button}
              </Button>
            )}
          </S.ButtonContainer></>)}
    </S.Container>
  );
}

export default Complete;
