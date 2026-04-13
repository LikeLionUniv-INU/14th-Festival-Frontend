import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    
    width: 100%;
    height: 100vh; 
    position: fixed; 
    top: 0;
    left: 0;
    
    background-color: transparent;
    box-sizing: border-box;
    overflow: hidden;
    `;

    export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 20px;
    padding: 40px 25px 25px 25px ;
    border: 1px solid rgba(171, 108, 56, 1);
    box-sizing: border-box;
    width: 311px;
    height: 521.16px;

    margin-bottom: 20px; 
    position: relative;
    z-index: 1;
    `;

export const Img = styled.img`
    width: 116px;
    height: 116px;
    margin-bottom: 20px;
    `;

export const ResultTitle = styled.div`
    font-size: 20px;
    font-weight: 700;
    white-space: pre-line;
    line-height: 1.2;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 40px;
    font-family: 'NEXON Lv1 Gothic ', sans-serif;
    text-align: center;
    `;

export const InputBox = styled.input`
    width: 204.55px;
    height: 34px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(144, 144, 144, 1);
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;
    outline: none;
    margin-bottom: 15px;

    //사용자가 입력할 글자 스타일
    font-family: 'NEXON Lv1 Gothic', sans-serif;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    
    & ::placeholder {
        font-family: 'NEXON Lv1 Gothic', sans-serif;
        font-size: 14px;
        color: rgba(166, 166, 166, 1);
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 25px; 


    button {
        width: 152px !important; 
        height: 50px !important;    
        border-radius: 12px !important; 
        font-size: 16px !important; 
        white-space: nowrap !important;
        font-size: 16px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 0 10px !important;
    }  
`;


