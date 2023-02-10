import * as React from "react";
import styled from "styled-components";
import { Container } from "../utils/Container.styled";


const StyledFooter = styled.footer`
        height: 100px;
        width: 100%;
        text-align: center;
        line-height: 100px;
        background-color: ${({ theme }) => theme.colors.footer};
        color: ${({ theme }) => theme.colors.secondaryColor};
        box-shadow: 0 -5px 40px #00000029;
    `

const Footer = () => (
    <StyledFooter>
        <Container>
            <p>Copyright &copy; {new Date().getFullYear()} mjfizjo.pl</p>
        </Container>
    </StyledFooter>
);

export default Footer;