import * as React from "react";
import styled from "styled-components";
import { Container } from "../utils/Container.styled";
import ContactContainer from "./ContactContainer";


const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: calc(100vh - 100px);
    position: relative;
    top: 100px;
    line-height: 1.5em;

    h1 {
        margin: 50px auto 10px;
        font-size: 3em;
    }

    p {
        padding: 25px 50px;
    }
`;


const ContactSection = () => (
    <Container>
        <StyledSection>
            <h1>Kontakt</h1>
            <p>Jeżeli masz jakieś pytania, chciałbyś umówić się na wizytę zadzwoń do mnie lub napisz email. Jeśli nie będę mógł odebrać to znaczy, że aktualnie pracuję i oddzwonię po zakończeniu zabiegu.</p>
            <ContactContainer />
            <p>Jestem do dyspozycji w poniszych lokalizacjach:</p>
        </StyledSection>
    </Container>
);

export default ContactSection;