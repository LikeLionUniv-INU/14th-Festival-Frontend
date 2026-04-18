// SlideTransition.jsx
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  animation: ${slideIn} 0.4s ease;
`;

function SlideTransition({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default SlideTransition;