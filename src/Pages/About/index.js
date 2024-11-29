import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import ContactForm from "./ContactForm";

function About() {
  return (
    <Layout>
      <div>
        <Intro />
        <ContactForm />
      </div>
    </Layout>
  );
}
export default About;
