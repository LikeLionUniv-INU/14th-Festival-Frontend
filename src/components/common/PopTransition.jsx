// PopTransition.jsx
import styled, { keyframes } from "styled-components";

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  70% {
    opacity: 1;
    transform: scale(1.08);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  animation: ${popIn} 0.35s ease;
`;



function PopTransition({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default PopTransition;