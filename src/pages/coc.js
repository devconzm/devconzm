import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/nav";
import Breadcrumb from "../components/breadcrumb";
import Footer from "../components/footer";
import CodeOfConduct from "../components/codeOfConduct";

function Register() {
  return (
    <Layout>
      <SEO keywords={["Open Source Community Africa", "OSCA", "Open Source Festival", "OSF"]} title="Tickets" />
      <Nav />
      <Breadcrumb name="Code Of Conduct" />
      <CodeOfConduct />
      <Footer />
    </Layout>
  );
}
export default Register;
