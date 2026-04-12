// 공통 버튼 컴포넌트
import styled from "styled-components";

const StyledBtn = styled.button`
  min-width: 150px;
  width: auto;
  height: 60px;
  padding: 16px 44px;
  border: none;
  border-radius: 12px;

  background-color: rgb(240, 140, 151);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  font-size: 24px;
  color: white;

  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;

  &:active {
    background-color: rgb(203, 120, 129);
    box-shadow: inset 2px 5px 5px rgba(0, 0, 0, 0.3);
  }
`;

const Button = ({ onClick, children }) => {
  return <StyledBtn onClick={onClick}>{children}</StyledBtn>;
};

export default Button;
