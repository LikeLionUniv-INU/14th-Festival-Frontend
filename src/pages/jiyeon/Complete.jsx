import React from 'react';
import Button from "../../components/Button.jsx";
import * as S from "./styles/complete.styles.js";


function Complete({ title, fontSize, gap = "10px" }) {
    return (
        <S.Container>
            <S.Title $fontSize={fontSize}>{title}</S.Title>
            <S.Lion $gap={gap}>
                <img src="/assets/smileLion.png" />
            </S.Lion>
            <Button>다음</Button>
        </S.Container>
    );
}

export default Complete;

