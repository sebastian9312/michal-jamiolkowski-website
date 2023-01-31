import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Charmonman:wght@400;700&family=Open+Sans:wght@400;700&display=swap');

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Charmonman', sans-serif;

        height: 300vh;
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

