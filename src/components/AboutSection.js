import * as React from "react";
import styled from "styled-components";
import { Container } from "../utils/Container.styled";
import { Flex } from "../utils/Flex.styled";
import { StaticImage } from "gatsby-plugin-image";


const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    line-height: 1.5em;

    padding-top: 100px;
    margin-bottom: 100px;
`;

const HeadingTitle = styled.p`
    margin: 50px auto 20px;
    font-size: 3em;
`;

const AboutInfoBox = styled.div`
    /* background-color: aquamarine; */
    padding: 3.2em;

    ul {
        margin-bottom: 50px;
    }

    li {
        text-align: left;
        margin-bottom: 20px;
        margin-left: 40px;
    }
`;

const ListTitle = styled.p`
    margin: 40px 0;
    font-size: 2.2em;
    text-align: left;
`;


const AboutSection = () => (
    <Container>
        <StyledSection>
            <HeadingTitle>Michał Jamiołkowski</HeadingTitle>
            <h2>Fizjoterapeuta</h2>

            <Flex>
                <AboutInfoBox>
                    <ListTitle>Wykształcenie :</ListTitle>
                    <ul>
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
                <StaticImage src="../images/portrait.jpg" alt="Zdjęcie fizjoterapeuty" />
            </Flex>

            <Flex isRevers>
                <AboutInfoBox>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </AboutInfoBox>
                <StaticImage src="../images/gym.jpg" alt="Zdjęcie fizjoterapeuty" />
            </Flex>

        </StyledSection>
    </Container >
);

export default AboutSection;
