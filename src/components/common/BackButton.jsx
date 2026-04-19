// 공통 버튼 컴포넌트
import styled from "styled-components";

const StyledBtn = styled.button`
  min-width: 160px;
  width: auto;
  height: 60px;
  padding: 16px 44px;
  border: none;
  border-radius: 12px;

  background-color: rgb(255, 255, 255);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  font-size: 24px;
  color: rgb(240, 140, 151);

  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;

  &:active {
    box-shadow: inset 2px 5px 5px rgba(0, 0, 0, 0.3);
  }
`;

const BackButton = ({ onClick }) => {
  return <StyledBtn onClick={onClick}>이전</StyledBtn>;
};

export default BackButton;
