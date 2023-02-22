import styled from "styled-components";
import { Link } from "gatsby";


export const StyledIntroSection = styled.section`
    height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    flex: 1;
    margin: 0 80px;

    @media (${({ theme }) => theme.media.notebook}) {
        flex-direction: column;
        padding: 5%;
        gap: 30px;
    };
    @media (${({ theme }) => theme.media.tablet}) {
        margin: 0 40px;
        padding: 5%;
        gap: 30px;
    };
    @media (${({ theme }) => theme.media.mobile}) {
        padding: 20px;
        gap: 10px;
        margin: 0;
    };
`;

export const IntroParagraph = styled.p`
    margin: 0 70px;
    width: 100%;
    line-height: 1.5em;
    letter-spacing: 1px;

    @media (${({ theme }) => theme.media.mobile}) {
        margin: 0;
    };
`;

export const StyledLink = styled(Link)`
    font-weight: bold;
    letter-spacing: 1.2px;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.secondaryColor};

    padding: 5px 10px;
    border-radius: 20px;
`;
