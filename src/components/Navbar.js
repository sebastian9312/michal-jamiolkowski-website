import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
    position: fixed;
    width: 100%;
    z-index: 999;
`;

const MenuLinks = styled.ul`
    display: flex;
    list-style: none;

    @media (${({ theme }) => theme.media.notebook}) {
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

const NavLink = styled(Link)`
    font-size: 1.5em;
    letter-spacing: 0.5px;
    padding: 40px;
    margin-right: 40px;
    color: ${({ theme }) => theme.colors.fontColor};
    text-decoration: none;
    transition: .3s;

    &:hover {
        color: ${({ theme }) => theme.colors.primaryColor};
    };

    @media (${({ theme }) => theme.media.notebook}) {
        margin: 0;
        padding: 10px 120px;
    };
`;





const HamburgerButton = styled.button`
    position: absolute;
    top: calc(50% - 1.5em);
    right: 3em;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 3em;
    height: 3em;
    border: none;
    background: none;

    @media (${({ theme }) => theme.media.notebook}) {
            display: flex;
        };

    div {
        width: 3em;
        height: 0.3em;
        background-color: ${({ theme }) => theme.colors.primaryColor};
        border-radius: 30px;
        transform-origin: 2px;
        transition: transform 300ms, opacity 300ms;

        :first-child {
            transform: ${({ menu }) => menu ? "rotate(45deg)" : "rotate(0)"};
        };
        :nth-child(2) {
            opacity: ${({ menu }) => menu ? 0 : 1};
        };
        :last-child {
            transform: ${({ menu }) => menu ? "rotate(-45deg)" : "rotate(0)"};
        };
    };
`;


const Navbar = () => {
    const [menu, showMenu] = useState(false);

    return (
        <StyledNavbar>
            <HamburgerButton menu={menu} onClick={() => showMenu(!menu)}>
                <div />
                <div />
                <div />
            </HamburgerButton>
            <Link to="/"><StaticImage style={{ width: "150px", marginLeft: "6vw" }} src="../images/logo.png" alt="logo" /></Link>
            <MenuLinks menu={menu}>
                <li><NavLink to="/">Rehabilitacja</NavLink></li>
                <li><NavLink to="/about">O mnie</NavLink></li>
                <li><NavLink to="/contact">Kontakt</NavLink></li>
            </MenuLinks>
        </StyledNavbar>
    )
};

export default Navbar;

