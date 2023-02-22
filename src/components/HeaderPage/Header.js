import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Flex } from "../../utils/Flex.styled";
import { StyledHeader, StyledButton, HeaderBox, Image } from "./Header.styled";


const MobileHeader = () => {
    return (
        <StyledHeader>
            <HeaderBox>
                <p>Michał Jamiołkowski</p>
                <h2>Fizjoterapia</h2>
                <Flex style={{ gap: "20px", marginTop: "40px" }}>
                    <StyledButton to="/contact" bgc="#FCD02B">Umów wizytę</StyledButton>
                    <StyledButton to="/#intro-section">O mnie</StyledButton>
                </Flex>
            </HeaderBox>
        </StyledHeader>
    )
};

const DesktopHeader = () => {
    return (
        <StyledHeader>
            <StaticImage style={Image} src="../../images/bcg3.png" alt="bcg"></StaticImage>
            <HeaderBox>
                <p>Michał Jamiołkowski</p>
                <h2>Fizjoterapia</h2>
                <Flex style={{ gap: "20px", marginTop: "40px" }}>
                    <StyledButton to="/contact" bgc="#FCD02B">Umów wizytę</StyledButton>
                    <StyledButton to="/#intro-section">O mnie</StyledButton>
                </Flex>
            </HeaderBox>
        </StyledHeader>
    )
};

const Header = () => {
    if (typeof window !== 'undefined') {
        if (window.innerWidth <= 850) {
            return <MobileHeader />
        }
        else {
            return <DesktopHeader />
        }
    };
};


export default Header;