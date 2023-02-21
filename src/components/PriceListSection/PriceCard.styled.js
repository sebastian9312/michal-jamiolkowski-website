import styled from "styled-components";


export const PriceListCard = styled.div`
    display: flex;
    width: 90%;
    margin: 50px auto 10px;
    color: ${({ theme }) => theme.colors.fontColor};
    border-radius: 30px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};

    @media (${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
    width: 100%;
    };
`;

export const CardTitle = styled.h2`
    position: relative;
    font-size: 1.8em;
    line-height: 1.2em;
    padding: 40px 40px 20px;

    &:before {
    content: "";
    position: absolute;
    left: 10%;
    bottom: 0;
    height: 1px;
    width: 80%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColor};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    };
`;

export const CardDesc = styled.p`
    font-size: 1em;
    padding: 30px 40px 40px;

    @media (${({ theme }) => theme.media.tablet}) {
    padding: 30px 20px 40px;
    };
`;

export const LeftBox = styled.div`
    width: 70%;

    @media (${({ theme }) => theme.media.tablet}) {
    width: 100%;
    };
`;

export const RightBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    padding: 0 20px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.secondaryColor};

    @media (${({ theme }) => theme.media.tablet}) {
    width: 100%;
    padding: 50px;
    };
`;

export const Price = styled.p`
    font-size: 4.5em;
    padding: 20px;
`;

export const Time = styled.p`
    font-size: 1.3em;
    padding: 10px;
`;