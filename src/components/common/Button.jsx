import styled from "styled-components";

const StyledBtn = styled.button`
    height: 60px;
    border: none;
    border-radius: 20px;
    background-color: rgb(230, 158, 166);
    font-size: 2rem;
    color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

    /* 내용물에 따라 가로 길이 자동 조정 */
    min-width: 150px;
    padding: 10px 34px;
    width: auto;
    white-space: nowrap;


    transition: transform 0.1s ease, box-shadow 0.1s ease;

    &:active {
        box-shadow: inset 2px 5px 5px rgba(0, 0, 0, 0.3);
        background-color: rgb(240, 140, 151);
    }
`;

const Button = ({onClick, children}) => {
    return <StyledBtn onClick={onClick}>{children}</StyledBtn>;
}

export default Button;