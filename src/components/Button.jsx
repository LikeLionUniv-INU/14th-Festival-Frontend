import styled from "styled-components";

const StyledBtn = styled.button`
    width: 150px;
    height: 60px;
    border: none;
    border-radius: 20px;
    background-color: rgb(233, 141, 60);

    font-size: 2rem;
    color: white;
    padding: 10px 20px;

    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

    transition: transform 0.1s ease, box-shadow 0.1s ease;

    &:active {
        box-shadow: inset 2px 5px 5px rgba(0, 0, 0, 0.3);
    }
`;

const Button = ({onClick, children}) => {
    return <StyledBtn onClick={onClick}>{children}</StyledBtn>;
}

export default Button;