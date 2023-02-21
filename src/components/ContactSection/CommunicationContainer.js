import * as React from "react";
import { ContactLink, ContactContainer, StyledFlex } from "./ContactSection.styled";
import { EmailIcon, TelephoneIcon } from "./IconStyles";

const CommunicationContainer = () => (
    <StyledFlex>
        <ContactContainer>
            <EmailIcon />
            <ContactLink href="mailto: michal.jamiolkowski93@gmail.com">michal.jamiolkowski93@gmail.com</ContactLink>
        </ContactContainer>
        <ContactContainer>
            <TelephoneIcon />
            <ContactLink href="tel:664-280-212">+48 664 280 212</ContactLink>
        </ContactContainer>
    </StyledFlex>
);

export default CommunicationContainer;