import styled from "styled-components";
import { Flex } from "../../utils/Flex.styled";


export const StyledSection = styled.section`
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

export const HeadingTitle = styled.p`
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

export const ListTitle = styled.p`
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

export const StyledHobbyParagraph = styled.p`
    padding-left: "50px"; 
    line-height: "1.5em"; 
    letter-spacing: "1px";

    @media (${({ theme }) => theme.media.mobile}) {
        margin-bottom: 50px;
    };
`;

export const AboutInfoBox = styled.div`
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

export const StyledFlex = styled(Flex)`
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