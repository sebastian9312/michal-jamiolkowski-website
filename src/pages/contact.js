import * as React from "react";
import Layout from "../Layout";
import ContactSection from "../components/ContactSection";


const ContactPage = () => (
    <Layout>
        <ContactSection />
    </Layout>
);

export default ContactPage;

export const Head = () => <title>Contact Page</title>;
