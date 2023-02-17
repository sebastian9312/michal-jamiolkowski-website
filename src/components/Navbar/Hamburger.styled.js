import styled from "styled-components";

export const HamburgerButton = styled.button`
    display: none;
    position: absolute;
    top: calc(50% - 1.5em);
    right: 3em;
    flex-direction: column;
    justify-content: space-around;
    width: 3em;
    height: 3em;
    border: none;
    background: none;

    @media (${({ theme }) => theme.media.xl}) {
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