import styled from "styled-components";

export const FormComponent = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;
    margin: 0;
    background-color: hsl(0, 0%, 100%);
    border-bottom: 2px solid hsl(0, 0%, 87%);
    }

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 2px solid hsla(0, 0%, 86%, 0.842);
`;

export const Button = styled.button`
    background-color: hsl(180, 100%, 20%);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s linear;

    &:hover {
        background-color: hsl(180, 100%, 25%);
        transform: scale(1.1);
    }

    &:active {
        background-color: hsl(180, 100%, 30%);
    }
`;