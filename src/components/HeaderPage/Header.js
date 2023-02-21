import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
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

// const Header = () => {
//     const [width, setWidth] = useState(window.innerWidth);
//     const breakpoint = 1200;

//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             window.addEventListener("resize", setWidth(window.innerWidth));

//             return () => window.removeEventListener("resize", setWidth(window.innerWidth));
//         }
//     }, []);

//     return width < breakpoint ? <MobileHeader /> : <DesktopHeader />;
// }
//     ;

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

// const Header = () => {
//     const [width, setWidth] = useState(window.innerWidth);
//     const breakpoint = 1200;

//     useEffect(() => {
//         const handleWindowResize = () => setWidth(window.innerWidth);

//         window.addEventListener("resize", handleWindowResize);

//         return () => window.removeEventListener("resize", handleWindowResize);
//     }, []);

//     return (
//         <StyledHeader>
//             {width > breakpoint && <StaticImage style={Image} src="../../images/bcg3.png" alt="bcg"></StaticImage>}
//             <HeaderBox>
//                 <p>Michał Jamiołkowski</p>
//                 <h2>Fizjoterapia</h2>
//                 <Flex style={{ gap: "20px", marginTop: "40px" }}>
//                     <StyledButton to="/contact" bgc="#FCD02B">Umów wizytę</StyledButton>
//                     <StyledButton to="/#intro-section">O mnie</StyledButton>
//                 </Flex>
//             </HeaderBox>
//         </StyledHeader>
//     )
// };


export default Header;