import * as React from "react";
import { PriceListCard, CardTitle, CardDesc, LeftBox, RightBox, Price, Time } from "./PriceCard.styled";


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

export default PriceCard;