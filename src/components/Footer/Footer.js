import * as React from "react";
import { Container } from "../../utils/Container.styled";
import { StyledFooter } from "./Footer.styled";


const Footer = () => (
    <StyledFooter>
        <Container>
            <p>Copyright &copy; {new Date().getFullYear()} mjfizjo.pl</p>
        </Container>
    </StyledFooter>
);

export default Footer;