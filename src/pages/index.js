import * as React from "react";
import Layout from "../Layout";
import Header from "../components/HeaderPage/Header";
import IntroSection from "../components/HeaderPage/IntroSection";


const IndexPage = () => (
  <Layout>
    <Header />
    <IntroSection />
  </Layout>
)

export default IndexPage;

export const Head = () => <title>Home Page</title>;
