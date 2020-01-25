import React from "react";

import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../components/layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/nav";
import Header from "../components/header";
import Cta from "../components/cta";
import About from "../components/about";
import Speakers from "../components/speakers";
import Sponsors from "../components/sponsors";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faFacebookSquare, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCalendar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faCalendar, faMapMarkerAlt, faTwitter, faFacebookSquare, faGithub);
config.autoAddCss = false;

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={["Open Source Community Africa", "OSCA", "Open Source Festival", "OSF"]} title="Home" />
      <Nav />
      <Header />
      <Cta />
      <About />
      <Speakers />
      <Sponsors />
      <Newsletter />
      <Footer />
    </Layout>
  );
}

export default IndexPage;
