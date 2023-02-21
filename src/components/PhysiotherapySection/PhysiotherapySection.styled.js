import styled from "styled-components";
import { Flex } from "../../utils/Flex.styled";


export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: calc(100vh - 100px);
    padding-top: 150px;
    line-height: 1.5em;
`;

export const StyledFlex = styled(Flex)`
    margin-bottom: 40px;

    @media (${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
    };
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.blackColor};
    font-size: ${({ fontSize }) => fontSize};
    margin-bottom: ${({ mb }) => mb};
    line-height: 1.1em;
`;

export const PhysioRespDesc = styled.p`
    padding: 0 5em 70px;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        left: 10%;
        bottom: 0;
        height: 1px;
        width: 80%;
        border-bottom: 1px solid ${({ theme }) => theme.colors.blackColor};
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    };

    @media (${({ theme }) => theme.media.mobile}) {
    padding: 0;
    };
`;

export const WhyMeSection = styled.section`
    margin-top: 50px;
`;

export const WhyMeBox = styled.div`
    padding: 0 4em;

    h2 {
    padding-bottom: 1em;
    font-size: 2em;
    line-height: 1.2em;
    color: ${({ theme }) => theme.colors.blackColor};
    };

    p {
    padding-bottom: 2em;
    };

    @media (${({ theme }) => theme.media.tablet}) {
    padding: 20px 0;
    };
`;

