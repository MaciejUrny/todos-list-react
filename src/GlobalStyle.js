import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: ${({theme}) => theme.color.alto};
        max-width: 1000px;
        margin: auto;
        padding: 20px;
    }
`;