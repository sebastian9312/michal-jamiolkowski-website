import * as React from "react";
import { Container } from "../../utils/Container.styled";
import { StyledSection, ContactTitle, ContactParagraph, ContactLink, StyledMap, CommunicationContainer, StyledFlex, LocalizationConatiner, LocalizationParagraph } from "./ContactSection.styled";
import { EmailIcon, TelephoneIcon, TimeIcon, LocationIcon } from "./IconStyles";


const ContactSection = () => (
    <Container>
        <StyledSection>
            <ContactTitle>Kontakt</ContactTitle>
            <ContactParagraph>Jeżeli masz jakieś pytania, chciałbyś umówić się na wizytę zadzwoń do mnie lub napisz email. Jeśli nie będę mógł odebrać to znaczy, że aktualnie pracuję i oddzwonię po zakończeniu zabiegu.</ContactParagraph>

            <StyledFlex>
                <CommunicationContainer>
                    <EmailIcon />
                    <ContactLink href="mailto: michal.jamiolkowski93@gmail.com">michal.jamiolkowski93@gmail.com</ContactLink>
                </CommunicationContainer>
                <CommunicationContainer>
                    <TelephoneIcon />
                    <ContactLink href="tel:664-280-212">+48 664 280 212</ContactLink>
                </CommunicationContainer>
            </StyledFlex>

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