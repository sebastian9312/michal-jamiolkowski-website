import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { StyledIntroSection, StyledLink, IntroParagraph } from "./IntroSection.styled"


const IntroSection = () => (
    <StyledIntroSection id="intro-section">
        <StaticImage style={{ borderRadius: "10px", width: "100%" }} src="../../images/misiek-intro.png" alt="Zdjęcie fizjoterapeuty" />
        <IntroParagraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <div style={{ marginTop: "20px" }}>Więcej o mnie dowiesz się <StyledLink to="/about">tutaj</StyledLink></div>
        </IntroParagraph>
    </StyledIntroSection>
);

export default IntroSection;