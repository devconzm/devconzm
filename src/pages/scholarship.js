import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/nav";
import Breadcrumb from "../components/breadcrumb";
import ScholarForm from "../components/scholarForm";
import Footer from "../components/footer";

function Scholarship() {
  return (
    <Layout>
      <SEO keywords={["Developer Conference Zambia", "DevConZM", "DevCon Zambia"]} title="Scholarship Program" />
      <Nav />
      <Breadcrumb name="Scholarship Program" />
      <ScholarForm />
      <Footer />
    </Layout>
  );
}

export default Scholarship;
