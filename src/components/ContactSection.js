import * as React from "react";
import styled from "styled-components";
import { Container } from "../utils/Container.styled";
import { Flex } from "../utils/Flex.styled";
import { ContactContainer, LocalizationConatiner } from "./ContactContainers";


const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: calc(100vh - 100px);
    position: relative;
    top: 100px;
    line-height: 1.5em;

    @media (${({ theme }) => theme.media.notebook}) {
        margin-bottom: 40px;
    };
    @media (${({ theme }) => theme.media.tablet}) {
        margin-bottom: 130px;
    };
    @media (${({ theme }) => theme.media.mobile}) {
        margin-bottom: 630px;
    };
`;

const ContactTitle = styled.h1`
    margin: 50px auto 10px;
    font-size: 3em;
`;

const ContactParagraph = styled.p`
    padding: 20px 50px;
    font-size: 1em;

    @media (${({ theme }) => theme.media.mobile}) {
        padding: 20px 0;
    };
`;

const StyledFlex = styled(Flex)`
    margin: 30px 0;
    z-index: -1;
`;

const StyledMap = styled.iframe`
    width: 550px;
    height: 350px;
    border: none;
    border-radius: 10px;
    box-shadow: 8px 8px 24px -15px rgba(66, 68, 90, 1);

    @media (${({ theme }) => theme.media.notebook}) {
        width: 100%;
    };
    @media (${({ theme }) => theme.media.mobile}) {
        margin-bottom: 30px;
    };
`;

const ContactSection = () => (
    <Container>
        <StyledSection>
            <ContactTitle>Kontakt</ContactTitle>
            <ContactParagraph>Jeżeli masz jakieś pytania, chciałbyś umówić się na wizytę zadzwoń do mnie lub napisz email. Jeśli nie będę mógł odebrać to znaczy, że aktualnie pracuję i oddzwonię po zakończeniu zabiegu.</ContactParagraph>
            <ContactContainer />
            <StyledFlex>
                <div>
                    <StyledMap src="https://maps.google.com/maps?q=Krasi%C5%84skiego%2064%20legionowo&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></StyledMap>
                </div>
                <div>
                    <LocalizationConatiner />
                </div>
            </StyledFlex>
        </StyledSection>
    </Container>
);

export default ContactSection;