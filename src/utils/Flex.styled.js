import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div, & > ul {
        flex:1;
    }

    @media (${({ theme }) => theme.screen.mobile}) {
        flex-direction: column;
        text-align: center;
    }

`