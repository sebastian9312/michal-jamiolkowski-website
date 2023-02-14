import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ isRevers }) => isRevers ? "row-reverse" : "row"};

    & > div, & > ul {
        flex: 1;
    }

    @media (${({ theme }) => theme.media.mobile}) {
        flex-direction: column;
        text-align: center;
    };
`;

