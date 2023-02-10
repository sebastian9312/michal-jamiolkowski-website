import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";


const StyledIntroSection = styled.section`
    height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    margin: 0 80px;

    p {
        margin: 0 70px;
        width: 100%;
        line-height: 1.5em;
        letter-spacing: 1px;
    }
`;

// const StyledLink = styled(Link)`
//     font-weight: bold;
//     letter-spacing: 1.2px;
//     /* text-decoration: none; */
//     color: ${({ theme }) => theme.colors.primaryColor};
// `;

const StyledLink = styled(Link)`
    font-weight: bold;
    letter-spacing: 1.2px;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: white;

    padding: 5px 10px;
    border-radius: 20px;
`;

const IntroSection = () => (
    <StyledIntroSection id="intro-section">
        <StaticImage src="../images/handsome-confident-smiling-man-with-hands-crossed-chest.jpg" alt="Zdjęcie fizjoterapeuty" />
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <div style={{ marginTop: "20px" }}>Więcej o mnie dowiesz się <StyledLink to="/about">tutaj</StyledLink></div>
        </p>
    </StyledIntroSection>
);

export default IntroSection;