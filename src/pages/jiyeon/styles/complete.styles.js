import styled from "styled-components";

export const Title = styled.h2`
  font-size: ${(props) => props.$fontSize || "40px"};
  font-weight: bold;
  margin: 0;
  text-align: center;
  white-space: pre-wrap;
`;

export const Lion = styled.div`
  margin: 8vh 0;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
`;
