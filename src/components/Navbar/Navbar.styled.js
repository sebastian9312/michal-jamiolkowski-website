import styled from "styled-components";
import { Link } from "gatsby";

export const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
    z-index: 999;
`;

export const MenuLinks = styled.ul`
    display: flex;
    list-style: none;

    @media (${({ theme }) => theme.media.xl}) {
        position: absolute;
        top: 100px;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 230px;
        transition: transform 200ms;
        transform: ${({ menu }) => menu ? "translateX(0)" : "translateX(-100%)"};
        background-color: ${({ theme }) => theme.colors.secondaryColor};
        box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
    };
`;

export const NavLink = styled(Link)`
    font-size: 1.5em;
    letter-spacing: .03em;
    padding: 40px;
    margin-right: 30px;
    color: ${({ theme }) => theme.colors.fontColor};
    text-decoration: none;
    transition: color 300ms;

    &:hover {
        color: ${({ theme }) => theme.colors.primaryColor};
    };

    @media (${({ theme }) => theme.media.xl}) {
        margin: 0;
        padding: 10px 120px;
    };
`;