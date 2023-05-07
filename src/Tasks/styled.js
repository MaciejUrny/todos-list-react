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
    border-bottom: 1px solid #ddd;
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
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s linear;

    ${({ toggleDone }) => toggleDone && css`
        background-color: hsl(120, 100%, 20%);

        &:hover {
            background-color: hsl(120, 100%, 25%); 
        }

        &:active {
            background-color: hsl(120, 100%, 30%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: hsl(348, 83%, 42%);

        &:hover {
            background-color: hsl(348, 83%, 47%); 
        }

        &:active {
            background-color: hsl(348, 83%, 52%);
        }
    `}
`;