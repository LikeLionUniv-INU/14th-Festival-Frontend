import React from 'react';
import Button from "../../components/common/Button.jsx";
import * as S from "./styles/complete.styles.js";

function Complete({ title, fontSize, lion = "smile", button}){
    return(
        <S.Container>
            <S.Title $fontSize={fontSize}>{title}</S.Title>
            <S.Lion>
                <img src={`/assets/${lion}Lion.png`}/>
            </S.Lion>
            {button && <Button>{button}</Button>}
        </S.Container>
    );
}

export default Complete;