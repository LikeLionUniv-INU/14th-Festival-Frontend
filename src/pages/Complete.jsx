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
import PopTransition from "../components/common/PopTransition.jsx";

function Complete({
  title,
  fontSize,
  lion = "smile",
  button,
  topinfo,
  bottominfo,
  onButtonClick,
  twolineinfo,
}) {
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
    <>
      {fontSize === "2rem" ? ( //lets-choice page
        <PopTransition>
          <S.Container>
            <S.TypeTitleArea $fontSize={fontSize}>
              <S.Title $fontSize={fontSize}>{title}</S.Title>
            </S.TypeTitleArea>
            <S.TypeLion>
              <img src={lionImages[lion]} />
              <S.TwoLineInfo>{twolineinfo}</S.TwoLineInfo>
            </S.TypeLion>
            <S.TypeButton>
              {button && <Button onClick={onButtonClick}>{button}</Button>}
            </S.TypeButton>
          </S.Container>
        </PopTransition>
      ) : lion === "crying" ? ( //match-fail page
        <PopTransition>
          <S.Container>
            <S.SlideTitleArea>
              <S.Title $fontSize={fontSize}>{title}</S.Title>
            </S.SlideTitleArea>
            <S.Info>{topinfo}</S.Info>
            <S.SlideLion>
              <img src={lionImages[lion]} />
            </S.SlideLion>
            {!isFriday && <S.Info>{bottominfo}</S.Info>}
            <S.SlideButton>
              {button && <Button onClick={onButtonClick}>{button}</Button>}
            </S.SlideButton>
          </S.Container>
        </PopTransition>
      ) : (
        <PopTransition>
          <S.Container>
            <S.SlideTitleArea>
              <S.Title $fontSize={fontSize}>{title}</S.Title>
            </S.SlideTitleArea>

            <S.SlideLion>
              <S.Info>{topinfo}</S.Info>
              <img src={lionImages[lion]} />
              <S.Info>{bottominfo}</S.Info>
            </S.SlideLion>

            <S.SlideButton>
              {button && <Button onClick={onButtonClick}>{button}</Button>}
            </S.SlideButton>
          </S.Container>
        </PopTransition>
      )}
    </>
  );
}

export default Complete;
