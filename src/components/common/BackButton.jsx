// 공통 버튼 컴포넌트
import styled from "styled-components";

const StyledBtn = styled.button`
  min-width: ${(props) =>
    props.$width ? "none" : "160px"}; // width가 들어오면 min-width 해제
  width: ${(props) => (props.$width ? props.$width : "auto")};
  height: 60px;
  padding: ${(props) =>
    props.$width ? "16px 0" : "16px 44px"}; // 가로폭 고정 시 패딩 조정
  border: none;
  border-radius: 12px;

  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  font-size: 24px;
  color: rgb(240, 140, 151);
  outline: 1px solid #f08c97;
  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;

  &:active {
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.3);
  }
`;

const BackButton = ({ onClick, width }) => {
  return (
    <StyledBtn onClick={onClick} $width={width}>
      이전
    </StyledBtn>
  );
};

export default BackButton;
