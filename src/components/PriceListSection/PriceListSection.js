import * as React from "react";
import { Container } from "../../utils/Container.styled";
// import { StyledSection, StyledFlex, Title, PhysioRespDesc, WhyMeSection, WhyMeBox } from "./PhysiotherapySection.styled";
import styled from "styled-components";

import services from "../../services";


const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: calc(100vh - 100px);
    padding-top: 100px;
    line-height: 1.5em;
`;

const PriceListTitle = styled.h1`
    margin: 50px auto 10px;
    font-size: 3em;
    color: ${({ theme }) => theme.colors.blackColor};
`;






const PriceListCard = styled.div`
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





const CardTitle = styled.h2`
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

const CardDesc = styled.p`
    font-size: 1em;
    padding: 30px 40px 40px;

    @media (${({ theme }) => theme.media.tablet}) {
        padding: 30px 20px 40px;
    };
`;



const LeftBox = styled.div`
    width: 70%;

    @media (${({ theme }) => theme.media.tablet}) {
        width: 100%;
    };
`;

const RightBox = styled.div`
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

const Price = styled.p`
    font-size: 4.5em;
    padding: 20px;
`;

const Time = styled.p`
    font-size: 1.3em;
    padding: 10px;
`;


const PriceCard = ({ title, description, price, time }) => (
    <PriceListCard>
        <LeftBox>
            <CardTitle>{title}</CardTitle>
            <CardDesc>{description}</CardDesc>
        </LeftBox>
        <RightBox>
            <Price>{price}</Price>
            <Time>{time}</Time>
        </RightBox>
    </PriceListCard>
);

const PriceListSection = () => (
    <Container>
        <StyledSection>
            <PriceListTitle>Cennik</PriceListTitle>

            {services.map((item) => <PriceCard
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                time={item.time}
            />)}

        </StyledSection>
    </Container>
);

export default PriceListSection;