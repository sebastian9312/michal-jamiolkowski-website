import styled from "styled-components";


export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: calc(100vh - 100px);
    padding: 100px 0;
    line-height: 1.5em;
`;

export const PriceListTitle = styled.h1`
    margin: 50px auto 10px;
    font-size: 3em;
    color: ${({ theme }) => theme.colors.blackColor};
`;
