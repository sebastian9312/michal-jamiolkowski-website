import styled from "styled-components";
import { Link } from "gatsby";

export const StyledHeader = styled.header`
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    background-image: url("https://www.transparenttextures.com/patterns/absurdity.png");
`;

export const StyledButton = styled(Link)`

    margin-top: 20px;

    width: 9em;
    padding: 20px 10px;
    border-radius: 50px;
    border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
    background-color: ${(props) => props.bgc};
    color: ${({ theme }) => theme.colors.secondaryColor};
    text-decoration: none;
    font-size: 2em;
    letter-spacing: 1.5px;
    transition: transform .2s;
    &:hover {
        transform: scale(1.03);
    };

    @media (${({ theme }) => theme.media.tablet}) {
           width: 8em;
           font-size: 1.5em;
        };
`;

export const HeaderBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30%;
    left: 15%;
    text-align: center;
    letter-spacing: 1.8px;
    color: ${({ theme }) => theme.colors.secondaryColor};
    text-shadow: 2px 2px 3px rgba(66, 79, 90, 0.67);
    p {
        font-size: 4em;
    };
    h2 {
        font-size: 2.5em;
    };

    @media (${({ theme }) => theme.media.xl}) {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            p {
                font-size: 3em;
            }
            h2 {
                font-size: 1.8em;
            }
        };

    @media (${({ theme }) => theme.media.mobile}) {
            top: 55%;
    };
`;

export const Image = {
    position: "absolute",
    bottom: "-7%",
    right: "-5%",
    width: "100%",
    height: "100%",
    transform: "scale(0.9)"
};
