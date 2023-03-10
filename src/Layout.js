import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Charmonman:wght@400;700&family=Open+Sans:wght@400;700&display=swap');

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Charmonman', sans-serif;
        color: ${({ theme }) => theme.colors.fontColor};
        scroll-behavior: smooth;
    }
`;

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <Navbar />
            {children}
            <Footer />
        </>
    </ThemeProvider>
)


export default Layout;

