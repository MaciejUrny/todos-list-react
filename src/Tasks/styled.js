import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 20px;
    margin: 0;
    list-style: none;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    padding: 20px 10px 20px 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-word;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    height: 30px;
    width: 30px;
    color: ${({ theme }) => theme.color.white};
    border: none;
    cursor: pointer;
    transition: 0.3s linear;

    &:hover {
        filter: brightness(110%); 
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const ToggleDoneButton = styled(Button)`
    background-color: ${({ theme }) => theme.color.camarone};
`;

export const RemoveButton = styled(Button)`
    background-color: ${({ theme }) => theme.color.crimson};
`;