import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 767px) {
        flex-basis: 100%;
    }
`;

export const Button = styled.button`
    color: hsl(180, 100%, 25%);
    background-color: transparent;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s linear;

    &:hover {
    color: hsl(180, 100%, 30%);
    }

    &:active {
    color: hsl(180, 100%, 35%);
    }

    &:disabled {
    color: #ccc;
    }
`;