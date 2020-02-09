import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/nav";
import Tickets from "../components/tickets";
import Footer from "../components/footer";

function Register() {
  return (
    <Layout>
      <SEO keywords={["Developer Conference Zambia", "DevConZM", "DevCon Zambia"]} title="Tickets" />
      <Nav />
      <Tickets />
      <Footer />
    </Layout>
  );
}
export default Register;
