import styled from "styled-components";
import { Flex } from "../../utils/Flex.styled";


export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: calc(100vh - 100px);
    padding-top: 100px;
    line-height: 1.5em;
`;

export const ContactTitle = styled.h1`
    margin: 50px auto 10px;
    font-size: 3em;
    color: ${({ theme }) => theme.colors.blackColor};
`;

export const ContactParagraph = styled.p`
    padding: 20px 50px;
    font-size: 1em;

    @media (${({ theme }) => theme.media.mobile}) {
        padding: 20px 0;
    };
`;

export const ContactLink = styled.a`
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

export const StyledMap = styled.iframe`
    width: 550px;
    height: 350px;
    border: none;
    border-radius: 10px;
    box-shadow: 8px 8px 24px -15px rgba(66, 68, 90, 1);
    z-index: 999;

    @media (${({ theme }) => theme.media.notebook}) {
        width: 100%;
        margin-bottom: 30px;
    };
`;

export const CommunicationContainer = styled.div`
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

export const StyledFlex = styled(Flex)`
    margin: 0 auto;

    @media (${({ theme }) => theme.media.notebook}) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    };
`;

export const LocalizationConatiner = styled(Flex)`
    margin: 30px 0;

    @media (${({ theme }) => theme.media.notebook}) {
        flex-direction: column;
        text-align: center;
    };
`;

export const LocalizationParagraph = styled.div`
    font-size: 1.2em;
    text-align: center;
    margin: 5px auto;
`;