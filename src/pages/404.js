import React from "react";

import { patterns } from "../components/cloudImages";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/nav";
import Footer from "../components/footer";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Nav />
      <div className="bg-dark-blue-primary w-full h-full z-20 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-12 pb-10 sm:pb-6 lg:pt-32 lg:pt-32 xl:pb-24 2xl:pt-56 2xl:pb-48">
        <div className="absolute left-0 fixed">
          <img className="-mt-24 -mb-12 -pl-4" src={patterns.headerRec} alt="" />
        </div>
        <div className="text-white text-center py-32">
          <h1 className="font-ubuntu text-4xl lg:text-6xl leading-tight font-bold uppercase">PAGE NOT FOUND!</h1>
          <p className="text-lg lg:text-xl text-gray-700 mt-4">Looks like someone abandoned me in staging branch :(</p>

          <a
            href="/"
            className="w-1/2 block sm:inline-block sm:w-auto mt-8 px-12 py-3 bg-orange-primary text-black rounded-lg text-center uppercase"
          >
            Return Home
          </a>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default NotFoundPage;
