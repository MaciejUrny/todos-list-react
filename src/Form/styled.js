import styled from "styled-components";

export const FormComponent = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;
    margin: 0;
    background-color: ${({ theme }) => theme.color.white};
    border-bottom: 2px solid ${({ theme }) => theme.color.alto};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.color.alto};
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s linear;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(120%);
    }
`;