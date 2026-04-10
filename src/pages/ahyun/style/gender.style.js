import styled from 'styled-components';

export const NButton = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    justify-content: flex-start;
    gap: 50px;
    padding: 60px 0;
    background-color:transparent;
    box-sizing: border-box;
`;

export const Guide = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`; 


export const BSection = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
`;

export const GenderButton = styled.button`
    width: 166px;
    height: 210px;
    border-radius: 26px;
    font-size: 28px;
    font-weight: bold;
    border: 1px solid rgba(240, 197, 202, 1);
    transition: all 0.2s;
    //선택 여부에 따라 색 바꿈
    background-color: ${(props) => (props.isSelected ? 'rgba(230, 158, 166, 1)' : '#FFFFFF')};
    color: ${(props) => (props.isSelected ? '#FFFFFF' : 'rgba(161, 92, 41, 1)')};
`;

