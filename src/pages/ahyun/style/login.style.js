import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: transparent;
    box-sizing: border-box;
    flex-direction: column;
    
    `;

    export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 20px;
    padding: 40px;
    border: 1px solid rgba(171, 108, 56, 1);
    box-sizing: border-box;
    `;

export const Img = styled.img`
    width: 116px;
    height: 116px;
    `;

export const LoginTitle = styled.div`
    font-size: 20px;
    font-weight: 700;
    white-space: pre-line;
    line-height: 1.5;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 30px;
    font-family: 'NEXON Lv1 Gothic Low OTF';
    `;

export const InputBox = styled.input`
    width: 204.55px;
    height: 34px;
    background: rgba(255, 255, 255, 1);
    border: 1px solidrgba(0, 0, 0, 1);
    border-radius: 8px;
    padding:10px;
    box-sizing: border-box;
    outline: none;

    //사용자가 입력할 글자 스타일
    font-family: 'NEXON Lv1 Gothic', sans-serif;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    
    $:placeholder {
        font-family: 'NEXON Lv1 Gothic', sans-serif;
        font-size: 14px;
        line-height: 1.0;
        letter-spacing: 0; 
        color: rgba(166, 166, 166, 1);
        }
`;

export const GuideText = styled.div`
    font-family: 'NEXON Lv1 Gothic', sans-serif;
    font-size: 11px;
    line-height: 1.0;
    letter-spacing: 0cm;
    font-weight: 300;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    margin: 6px 0 22px 0;
`;
