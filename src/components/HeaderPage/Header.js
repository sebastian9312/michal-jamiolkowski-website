import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Flex } from "../../utils/Flex.styled";
import { StyledHeader, StyledButton, HeaderBox, Image } from "./Header.styled";


const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 1200;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <StyledHeader>
            {width > breakpoint && <StaticImage style={Image} src="../../images/bcg3.png" alt="bcg"></StaticImage>}
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


export default Header;