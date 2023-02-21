import * as React from "react";
import { Container } from "../../utils/Container.styled";
import CommunicationContainer from "../ContactSection/CommunicationContainer";
import { StyledSection, PriceListTitle } from "./PriceListSection.styled";
import PriceCard from "./PriceCard";
import services from "../../services";


const PriceListSection = () => (
    <Container>
        <StyledSection>
            <PriceListTitle>Cennik</PriceListTitle>
            <CommunicationContainer />
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