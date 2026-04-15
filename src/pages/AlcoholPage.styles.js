// 8. 질문 3 - 주종 (남윤)

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  height: 100dvh; 
  
  justify-content: center; 

  padding: 6dvh 20px; 
  box-sizing: border-box;
  background-color: #FFFDF5; 

  gap: 2dvh;

  margin-bottom: 20px;
`;

export const ButtonContainer = styled.button`
  button {
    background-color: ${(props) => (props.$active ? "" : "#D9D9D9 !important")};
  }

  margin-bottom: 2dvh;
`;