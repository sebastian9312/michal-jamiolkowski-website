import * as React from "react";
import Layout from "../Layout";
import PriceListSection from "../components/PriceListSection/PriceListSection";


const PriceListPage = () => (
    <Layout>
        <PriceListSection />
    </Layout>
);

export default PriceListPage;

export const Head = () => <title>Price-list Page</title>;