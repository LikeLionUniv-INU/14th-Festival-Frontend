import styled from 'styled-components';

export const NButton = styled.div`
    display: flex;
    justify-content: center;
    
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100vh;
    justify-content: space-between;
    padding-top: 100px;
    background-color: #FFFFFF;
    height: 100dvh;
`;

export const Guide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;  // 사진이랑 말풍선 사이 간격 //
    margin-bottom: 50px;
    width: 90%;
    text-align: center;
`; 

export const SBubble = styled.div`
    flex: 1;
    padding: 15px 20px;
    background-color: #FFFFFF;
    border: 1px solid #AA6734;
    border-radius: 15px;
    font-size: 16px;
    color: #000000;
`;

export const BSection = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 100px;
`;

export const GenderButton = styled.button`
    width: 166px;
    height: 210px;
    border-radius: 20px;
    font-size: 28px;
    font-weight: bold;
    border: 1px solid #F0C5CA;
    transition: all 0.2s;
    //선택 여부에 따라 색 바꿈
    background-color: ${(props) => (props.isSelected ? 'rgba(230, 158, 166, 0.74)' : '#FFFFFF')};
    color: ${(props) => (props.isSelected ? '#FFFFFF' : '#EB9850')};
`;


