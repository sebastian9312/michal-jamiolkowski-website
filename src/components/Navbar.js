import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0 120px;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
    position: fixed;
    width: 100%;
    z-index: 999;

    ul {
        display: flex;
        list-style: none;
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
        font-size: 1.53em;
    }
`;


const Navbar = () => (
    <StyledNavbar>
        <Link to="/"><StaticImage style={{ width: "150px" }} src="../images/logo.png" alt="logo" /></Link>
        <ul>
            <li><NavLink to="/">Rehabilitacja</NavLink></li>
            <li><NavLink to="/about">O mnie</NavLink></li>
            <li><NavLink to="/contact">Kontakt</NavLink></li>
        </ul>
    </StyledNavbar>
);

export default Navbar;

