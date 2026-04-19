// 공통 버튼 컴포넌트
import styled from "styled-components";

const StyledBtn = styled.button`
  min-width: 160px;
  width: auto;
  height: 60px;
  padding: 16px 44px;
  border: none;
  border-radius: 12px;

  background-color: ${({ $active }) =>
    $active === false ? "#d9d9d9" : "#f08c97"};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  font-size: 24px;
  color: ${({ $active }) => ($active === false ? "#000000" : "#ffffff")};

  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;

  &:active {
    background-color: ${({ $active }) =>
      $active === false ? "#d9d9d9" : "#cb7881"};
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.3);
  }
`;

const NextButton = ({ onClick, children, $active, ...props }) => {
  return (
    <StyledBtn onClick={onClick} $active={$active} {...props}>
      {children}
    </StyledBtn>
  );
};

export default NextButton;
