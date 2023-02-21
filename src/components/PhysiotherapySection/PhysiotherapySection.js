import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container } from "../../utils/Container.styled";
import { StyledSection, StyledFlex, Title, PhysioRespDesc, WhyMeSection, WhyMeBox } from "./PhysiotherapySection.styled";


const PhysiotherapySection = () => (
    <Container>
        <StyledSection>

            <Title fontSize="2em" mb="30px">Czym w zasadzie zajmuje się fizjoterapeuta?</Title>
            <PhysioRespDesc>Fizjoterapeuta jest osobą przede wszystkim odpowiedzialną za diagnostykę, leczenie i rehabilitację funkcji narządu ruchu i czynności życiowych. Fizjoterapeuta jest odpowiedzialny za kompleksową opiekę nad pacjentami, w tym za działania rehabilitacyjne, które mogą być niezbędne do utrzymania optymalnego stanu zdrowia, zapobiegania chorobom lub urazom, a także wspomagania powrotu do zdrowia po przebytej chorobie lub urazie.</PhysioRespDesc>

            <WhyMeSection>
                <Title fontSize="3.5em" mb="80px">Dlaczego warto u mnie?</Title>

                <StyledFlex>
                    <WhyMeBox>
                        <h2>Przekazuję wiedzę pacjentom</h2>
                        <p>Fizjoterapeuta jest osobą przede wszystkim odpowiedzialną za diagnostykę, leczenie i rehabilitację funkcji narządu ruchu i czynności życiowych. Fizjoterapeuta jest odpowiedzialny za kompleksową opiekę nad pacjentami, w tym za działania rehabilitacyjne, które mogą być niezbędne do utrzymania optymalnego stanu zdrowia, zapobiegania chorobom lub urazom, a także wspomagania powrotu do zdrowia po przebytej chorobie lub urazie.</p>
                    </WhyMeBox>
                    <StaticImage style={{ borderRadius: "10px" }} src="../../images/1.png" alt="Sprzęt rehabilitacyjny" />
                </StyledFlex>

                <StyledFlex isRevers>
                    <WhyMeBox>
                        <h2>Różnorodne formy terapii rehabilitacyjnej</h2>
                        <p>Fizjoterapeuta jest osobą przede wszystkim odpowiedzialną za diagnostykę, leczenie i rehabilitację funkcji narządu ruchu i czynności życiowych. Fizjoterapeuta jest odpowiedzialny za kompleksową opiekę nad pacjentami, w tym za działania rehabilitacyjne, które mogą być niezbędne do utrzymania optymalnego stanu zdrowia, zapobiegania chorobom lub urazom, a także wspomagania powrotu do zdrowia po przebytej chorobie lub urazie.</p>
                    </WhyMeBox>
                    <StaticImage style={{ borderRadius: "10px" }} src="../../images/salka.jpg" alt="Sprzęt rehabilitacyjny" />
                </StyledFlex>

                <StyledFlex>
                    <WhyMeBox>
                        <h2>Zmiana wzorców ruchowych</h2>
                        <p>Fizjoterapeuta jest osobą przede wszystkim odpowiedzialną za diagnostykę, leczenie i rehabilitację funkcji narządu ruchu i czynności życiowych. Fizjoterapeuta jest odpowiedzialny za kompleksową opiekę nad pacjentami, w tym za działania rehabilitacyjne, które mogą być niezbędne do utrzymania optymalnego stanu zdrowia, zapobiegania chorobom lub urazom, a także wspomagania powrotu do zdrowia po przebytej chorobie lub urazie.</p>
                    </WhyMeBox>
                    <StaticImage style={{ borderRadius: "10px" }} src="../../images/2.png" alt="Sprzęt rehabilitacyjny" />
                </StyledFlex>


            </WhyMeSection>

        </StyledSection>
    </Container>
);

export default PhysiotherapySection;