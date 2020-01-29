import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/nav";
import Breadcrumb from "../components/breadcrumb";
import Footer from "../components/footer";

function Register() {
  return (
    <Layout>
      <SEO keywords={["Developer Conference Zambia", "DevConZM", "DevCon Zambia"]} title="Tickets" />
      <Nav />
      <Breadcrumb name="Tickets" />
      <Footer />
    </Layout>
  );
}
export default Register;
