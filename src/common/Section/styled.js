import styled from "styled-components";

export const SectionComponent = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    border-bottom: 2px solid ${({ theme }) => theme.color.alto};
    padding: 0px;
    margin: 0px;
    margin-top: 10px;
`;

export const Header = styled.header`
    border-bottom: 2px solid ${({ theme }) => theme.color.alto};
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const HeaderTitle = styled.h2`
    margin: 0;
    padding: 10px;
`;