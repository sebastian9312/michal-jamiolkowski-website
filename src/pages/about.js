import * as React from "react";
import Layout from "../Layout";
import AboutSection from "../components/AboutSection";

const AboutPage = () => (
    <Layout>
        <AboutSection />
    </Layout>
);

export default AboutPage;

export const Head = () => <title>About Page</title>;