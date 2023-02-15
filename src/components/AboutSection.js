import * as React from "react";
import styled from "styled-components";
import { Container } from "../utils/Container.styled";
import { Flex } from "../utils/Flex.styled";
import { StaticImage } from "gatsby-plugin-image";


const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: left;
    line-height: 1.5em;

    padding-top: 100px;
    margin-bottom: 100px;

    h2 {
        font-size: 1.7em;
        margin-left: 60px;
        color: ${({ theme }) => theme.colors.blackColor};

        @media (${({ theme }) => theme.media.mobile}) {
        font-size: 1.4em;
        margin-left: 0;
        margin-bottom: 20px;
        };
    };

    @media (${({ theme }) => theme.media.notebook}) {
        text-align: center;
    };
`;

const StyledFlex = styled(Flex)`
    @media (${({ theme }) => theme.media.notebook}) {
          flex-direction : column;
          text-align: center;
          padding: 0 10%;
        };
    @media (${({ theme }) => theme.media.mobile}) {
          flex-direction : column;
          text-align: center;
          padding: 5%;
        };
`;

const HeadingTitle = styled.p`
    margin: 50px 0 40px 30px;
    font-size: 4.2em;
    line-height: 1em;
    color: ${({ theme }) => theme.colors.blackColor};

    @media (${({ theme }) => theme.media.mobile}) {
        font-size: 3.8em;
        margin-left: 0;
        margin-bottom: 20px;
    };
`;

const AboutInfoBox = styled.div`
    padding: 3.2em;

    ul {
        margin-bottom: 50px;
    };

    li {
        text-align: left;
        margin-bottom: 20px;
        margin-left: 40px;
    };

    @media (${({ theme }) => theme.media.mobile}) {
        padding: 0;
    };
`;

const ListTitle = styled.p`
    margin: 40px 0;
    font-size: 2.2em;
    text-align: left;
    color: ${({ theme }) => theme.colors.blackColor};

    @media (${({ theme }) => theme.media.notebook}) {
        text-align: center;
    };

    @media (${({ theme }) => theme.media.mobile}) {
        font-size: 1.9em;
    };
`;

const StyledHobbyParagraph = styled.p`
    padding-left: "50px"; 
    line-height: "1.5em"; 
    letter-spacing: "1px";

    @media (${({ theme }) => theme.media.mobile}) {
        margin-bottom: 50px;
    };
`;


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
                <StaticImage style={{ borderRadius: "10px" }} src="../images/portrait.jpg" alt="Zdjęcie fizjoterapeuty" />
            </StyledFlex>

            <StyledFlex isRevers>
                <AboutInfoBox>
                    <StyledHobbyParagraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</StyledHobbyParagraph>
                </AboutInfoBox>
                <StaticImage style={{ borderRadius: "10px" }} src="../images/gym.jpg" alt="Zdjęcie fizjoterapeuty" />
            </StyledFlex>

        </StyledSection>
    </Container >
);

export default AboutSection;
