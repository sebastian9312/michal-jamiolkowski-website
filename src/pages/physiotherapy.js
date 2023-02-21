import * as React from "react";
import Layout from "../Layout";
import PhysiotherapySection from "../components/PhysiotherapySection/PhysiotherapySection";


const PhysiotherapyPage = () => (
    <Layout>
        <PhysiotherapySection />
    </Layout>
);

export default PhysiotherapyPage;

export const Head = () => <title>Price List Page</title>;