import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Flex } from "../utils/Flex.styled";

const StyledHeader = styled.header`
    position: relative;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primaryColor};

    /* background-image: url("https://www.transparenttextures.com/patterns/absurdity.png"); */
`;

const StyledButton = styled(Link)`
    margin-top: 60px;
    width: 9em;
    padding: 20px 10px;
    border-radius: 50px;
    border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
    background-color: ${(props) => props.bgc};
    color: ${({ theme }) => theme.colors.secondaryColor};
    text-decoration: none;
    font-size: 2em;
    letter-spacing: 1.5px;
    transition: transform .2s;

    &:hover {
        transform: scale(1.03);
    }
`;

const HeaderBox = styled.div`
    color: ${({ theme }) => theme.colors.secondaryColor};
    letter-spacing: 1.8px;
    text-shadow: 2px 2px 3px rgba(66, 79, 90, 0.67);

    position: absolute;
    top: 30%;
    left: 15%;

    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    p {
        font-size: 4em;
    };

    h2 {
        font-size: 2.5em;
    };

`;

const Image = {
    position: "absolute",
    bottom: "-7%",
    right: "-5%",
    width: "100%",
    height: "100%",
    transform: "scale(0.9)"
};

const Header = () => (
    <StyledHeader>
        <StaticImage style={Image} src="../images/bcg3.png" alt="bcg"></StaticImage>
        <HeaderBox>
            <p>Michał Jamiołkowski</p>
            <h2>Fizjoterapia</h2>
            <Flex style={{ gap: "20px" }}>
                <StyledButton to="/contact" bgc="orange">Umów wizytę</StyledButton>
                <StyledButton to="/#intro-section">O mnie</StyledButton>
            </Flex>
        </HeaderBox>
    </StyledHeader>
);

export default Header;