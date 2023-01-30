import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primaryColor};

    p {
        font-size: 3.5em;
        color: ${({ theme }) => theme.colors.secondaryColor};
        letter-spacing: 1.5px;
        text-shadow: 2px 2px 3px rgba(66, 79, 90, 0.67);
    }
`;

const ShowMoreBtn = styled(Link)`
    margin-top: 50px;
    padding: 20px 50px;
    border-radius: 50px;
    box-shadow: 2px 3px 15px -2px rgba(41, 82, 74, 1);
    background-color: ${({ theme }) => theme.colors.actionColor};
    color: ${({ theme }) => theme.colors.secondaryColor};
    text-decoration: none;
    font-size: 2em;
    letter-spacing: 1.5px;
    text-shadow: 2px 2px 3px rgba(66, 79, 90, 0.67);
`

const Header = () => (
    <StyledHeader>
        <p>Michał Jamiołkowski</p>
        <p>Fizjoterapia</p>
        <ShowMoreBtn to="/">Zobacz więcej</ShowMoreBtn>
    </StyledHeader>
);

export default Header;