import * as React from "react";
import { Container } from "../../utils/Container.styled";
import { StaticImage } from "gatsby-plugin-image";
import { StyledSection, HeadingTitle, ListTitle, StyledHobbyParagraph, AboutInfoBox, StyledFlex } from "./AboutSection.styled";


const AboutSection = () => (
    <Container>
        <StyledSection>
            <HeadingTitle>mgr Michał Jamiołkowski</HeadingTitle>
            <h2>Fizjoterapeuta / Terapeuta manualny</h2>

            <StyledFlex>
                <AboutInfoBox>
                    <ListTitle>Wykształcenie :</ListTitle>
                    <ul>
                        <li>Medyczna Szkoła Policealna nr 2 (technik masazysta)</li>
                        <li>Wyższa Szkoła Rehabilitacji w Warszawa (studia licencjackie oraz magisterskie)</li>
                    </ul>
                    <ListTitle>Ukończone kursy :</ListTitle>
                    <ul>
                        <li>Pinotepria FRSC wg. Lek. Med. Radosława Składowskiego</li>
                        <li>Kurs Fascial Distortion Model</li>
                        <li>Medycyna Manualna wg dr Radosława Składowskiego moduł I</li>
                        <li>Medycyna Manualna wg dr Radosława Składowskiego moduł II</li>
                        <li>Medycyna Manualna wg dr Radosława Składowskiego moduł IIIa oraz IIIb</li>
                        <li>Medycyna Manualna wg dr Radosława Składowskiego moduł IV</li>
                        <li>Instruktor Trójboju Siłowego stopień I i II</li>
                        <li>Szkolenie Diagnostyka słabych ogniw w treningu siłowym</li>
                    </ul>
                </AboutInfoBox>
                <StaticImage style={{ borderRadius: "10px" }} src="../../images/portrait.jpg" alt="Zdjęcie fizjoterapeuty" />
            </StyledFlex>

            <StyledFlex isRevers>
                <AboutInfoBox>
                    <StyledHobbyParagraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</StyledHobbyParagraph>
                </AboutInfoBox>
                <StaticImage style={{ borderRadius: "10px" }} src="../../images/gym.jpg" alt="Zdjęcie fizjoterapeuty" />
            </StyledFlex>

        </StyledSection>
    </Container >
);

export default AboutSection;
