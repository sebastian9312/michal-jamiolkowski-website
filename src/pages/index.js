import * as React from "react";
import Layout from "../Layout";
import Header from "../components/Header";
import IntroSection from "../components/IntroSection";


const IndexPage = () => (
  <Layout>
    <Header />
    <IntroSection />
  </Layout>
)

export default IndexPage;

export const Head = () => <title>Home Page</title>;
