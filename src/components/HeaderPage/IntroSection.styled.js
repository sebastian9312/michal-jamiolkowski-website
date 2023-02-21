import styled from "styled-components";
import { Link } from "gatsby";


export const StyledIntroSection = styled.section`
    height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    flex: 1;
    margin: 0 80px;

    p {
        margin: 0 70px;
        width: 100%;
        line-height: 1.5em;
        letter-spacing: 1px;
    }

    @media (${({ theme }) => theme.media.notebook}) {
        flex-direction: column;
        padding: 5%;
        gap: 30px;
    };
    @media (${({ theme }) => theme.media.mobile}) {
        padding: 0;
        gap: 10px;
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
