import styled from 'styled-components';


export const Title = styled.h2`
    font-size: ${(props) => props.$fontSize || "2.8rem"};
    font-weight: bold;
    margin: 0;
    text-align: center;
    white-space: pre-wrap;
`;

export const Lion = styled.div`
    margin-top: 10px;
    margin-bottom: 30px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100dvh;
`;

