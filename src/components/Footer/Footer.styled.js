import styled from "styled-components";


export const StyledFooter = styled.footer`
        height: 100px;
        width: 100%;
        text-align: center;
        line-height: 100px;
        background-color: ${({ theme }) => theme.colors.footer};
        color: ${({ theme }) => theme.colors.secondaryColor};
        box-shadow: 0 -5px 40px #00000029;
        z-index: 999;
    `;