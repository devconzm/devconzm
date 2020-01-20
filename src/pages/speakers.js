import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/nav";
import Breadcrumb from "../components/breadcrumb";
import Sched from "../components/schedSpeakers";
import Footer from "../components/footer";

function Speakers() {
  return (
    <Layout>
      <SEO keywords={["Open Source Community Africa", "OSCA", "Open Source Festival", "OSF"]} title="Speakers" />
      <Nav />
      <Breadcrumb name="Speakers" />
      <Sched />
      <Footer />
    </Layout>
  );
}

export default Speakers;
