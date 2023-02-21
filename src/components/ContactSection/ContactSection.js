import * as React from "react";
import { Container } from "../../utils/Container.styled";
import CommunicationContainer from "./CommunicationContainer";
import { StyledSection, ContactTitle, ContactParagraph, ContactLink, StyledMap, ContactContainer, StyledFlex, LocalizationConatiner, LocalizationParagraph } from "./ContactSection.styled";
import { EmailIcon, TelephoneIcon, TimeIcon, LocationIcon } from "./IconStyles";


const ContactSection = () => (
    <Container>
        <StyledSection>
            <ContactTitle>Kontakt</ContactTitle>
            <ContactParagraph>Jeżeli masz jakieś pytania, chciałbyś umówić się na wizytę zadzwoń do mnie lub napisz email. Jeśli nie będę mógł odebrać to znaczy, że aktualnie pracuję i oddzwonię po zakończeniu zabiegu.</ContactParagraph>
            <CommunicationContainer />
            <LocalizationConatiner>
                <StyledMap width="550" height="350" src="https://maps.google.com/maps?q=Krasi%C5%84skiego%2064&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></StyledMap>
                <StyledFlex isFlexStart>
                    <div>
                        <LocationIcon />
                        <LocalizationParagraph>ul.Krasińskiego 64</LocalizationParagraph>
                        <LocalizationParagraph>05-120 Legionowo</LocalizationParagraph>
                    </div>
                    <div>
                        <TimeIcon />
                        <LocalizationParagraph>Sobota - 10:00 - 18:00</LocalizationParagraph>
                        <LocalizationParagraph>Niedziela - 12:00 - 18:00</LocalizationParagraph>
                    </div>
                </StyledFlex>
            </LocalizationConatiner>

        </StyledSection>
    </Container>
);

export default ContactSection;