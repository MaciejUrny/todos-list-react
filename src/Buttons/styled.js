import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
    }
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.teal};
    background-color: transparent;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s linear;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }
`;