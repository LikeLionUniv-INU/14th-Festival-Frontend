import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../components/common/Button.jsx";
import * as S from "./styles/complete.styles.js";

function Complete({
  title,
  fontSize,
  lion = "smile",
  button,
  animation = "slideUp",
  onButtonClick,
}) {
  const isTypewriter = animation === "typewriter"; //타자기 효과

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
          <img src={`/assets/${lion}Lion.png`} />
        </S.Lion>
      </S.Box>
      {button && <Button onClick={onButtonClick}>{button}</Button>}
    </S.Container>
  );
}

export default Complete;
