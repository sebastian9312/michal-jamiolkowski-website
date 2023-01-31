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

    ul {
        display: flex;
        list-style: none;
    };
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 1.25em;
    padding: 40px 30px;

    text-shadow: 2px 2px 3px rgba(6, 9, 0, 0.22);
`;


const Navbar = () => (
    <StyledNavbar>
        <StaticImage style={{ width: "150px" }} src="../images/logo.png" alt="logo" />
        <ul>
            <li><NavLink to="/">Rehabilitacja</NavLink></li>
            <li><NavLink to="/">Cennik</NavLink></li>
            <li><NavLink to="/">Kontakt</NavLink></li>
        </ul>
    </StyledNavbar>
);

export default Navbar;