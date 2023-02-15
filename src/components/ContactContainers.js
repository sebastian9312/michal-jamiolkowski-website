import * as React from "react";
import styled from "styled-components";
import { Flex } from "../utils/Flex.styled";

import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { BiTime } from "@react-icons/all-files/Bi/BiTime";


const ContactIconStyles = {
    fontSize: "5em",
    color: "#08A6E4",
    marginRight: "20px",
    border: "3px solid #08A6E4",
    borderRadius: "50%",
    padding: "10px"
};

const LocalizationIconStyles = {
    fontSize: "2.2em",
    color: "#08A6E4",
    marginRight: "10px",
    border: "2px solid #08A6E4",
    borderRadius: "50%",
    padding: "3px"
};

const StyledFlex = styled(Flex)`
    margin: 0 auto;

    @media (${({ theme }) => theme.media.notebook}) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    };
`;


const StyledContactBox = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    padding: 30px 60px;

    @media (${({ theme }) => theme.media.notebook}) {
        padding: 20px 0;
    };
    @media (${({ theme }) => theme.media.tablet}) {
        flex-direction: column;
    };
`;

const ContactLink = styled.a`
    font-size: 1.4em;
    color: ${({ theme }) => theme.colors.primaryColor};
    text-decoration: none;
    transition: 300ms;
    :hover {
        color: ${({ theme }) => theme.colors.fontColor};
    };

    @media (${({ theme }) => theme.media.tablet}) {
        margin-top: 10px;
    };
`;

const LocalizationParagraph = styled.div`
    font-size: 1.2em;
    text-align: center;
    margin: 5px auto;
`;

export const LocalizationConatiner = () => (
    <StyledFlex isFlexStart>
        <div>
            <GoLocation style={LocalizationIconStyles} />
            <LocalizationParagraph>ul.Krasińskiego 64</LocalizationParagraph>
            <LocalizationParagraph>05-120 Legionowo</LocalizationParagraph>
        </div>
        <div>
            <BiTime style={LocalizationIconStyles} />
            <LocalizationParagraph>Pon - pt 8:00 - 21:00</LocalizationParagraph>
            <LocalizationParagraph>Sobota - 10:00 - 18:00</LocalizationParagraph>
            <LocalizationParagraph>Niedziela - 12:00 - 18:00</LocalizationParagraph>
        </div>
    </StyledFlex>
);

export const ContactContainer = () => (
    <StyledFlex>
        <StyledContactBox>
            <AiOutlineMail style={ContactIconStyles} />
            <ContactLink href="mailto: michal.jamiolkowski93@gmail.com">michal.jamiolkowski93@gmail.com</ContactLink>
        </StyledContactBox>
        <StyledContactBox>
            <FaPhone style={ContactIconStyles} />
            <ContactLink href="tel:664-280-212">+48 664 280 212</ContactLink>
        </StyledContactBox>
    </StyledFlex>
);
