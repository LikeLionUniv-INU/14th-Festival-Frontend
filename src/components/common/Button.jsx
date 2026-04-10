// 공통 버튼 컴포넌트
import styled from "styled-components";

const StyledBtn = styled.button`
  height: 60px;
  border: none;
  border-radius: 12px;
  background-color: #f08c97;
  font-size: 2rem;
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  padding: 16px 44px;
  font-size: 24px;

  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;

  &:active {
    box-shadow: inset 2px 5px 5px rgba(0, 0, 0, 0.3);
    background-color: #cb7881;
  }
`;

const Button = ({ onClick, children }) => {
  return <StyledBtn onClick={onClick}>{children}</StyledBtn>;
};

export default Button;
