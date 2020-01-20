import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO/seo";

function TailwindDemoPage() {
  return (
    <Layout>
      <SEO keywords={["gatsby", "tailwind", "tailwind config", "tailwindcss"]} title="Tailwind config demo page" />
      <section className="">
        <h2 className="font-avenir text-h5 text-orange-primary">Font sizes</h2>
        <section className="mb-4">
          <h1 className="text-h1">H1 heading</h1>
          <h2 className="text-h2">H2 heading</h2>
          <h3 className="text-h3">H3 heading</h3>
          <h4 className="text-h4">H4 heading</h4>
          <h5 className="text-h5">H5 heading</h5>
          <h6 className="text-h6">H6 heading</h6>
          <p className="text-base">This is an example praragraph</p>
        </section>
      </section>

      <section className="">
        <h2 className="font-avenir text-h5 text-orange-primary">colors</h2>
        <section className="flex mb-4 -mx-2">
          <div className="lg:w-1/5 px-2">
            <div className="flex w-full bg-orange-100">
              <div className="bg-orange-primary w-1/2"></div>
              <div className="flex-column w-1/2">
                <div className="h-10 bg-orange-100"></div>
                <div className="h-10 bg-orange-200"></div>
                <div className="h-10 bg-orange-300"></div>
                <div className="h-10 bg-orange-400"></div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/5 px-2">
            <div className="flex w-full bg-dark-blue-100">
              <div className="bg-dark-blue-primary w-1/2"></div>
              <div className="flex-column w-1/2">
                <div className="h-10 bg-dark-blue-100"></div>
                <div className="h-10 bg-dark-blue-200"></div>
                <div className="h-10 bg-dark-blue-300"></div>
                <div className="h-10 bg-dark-blue-400"></div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/5 px-2">
            <div className="flex w-full bg-gray-100 h-full">
              <div className="bg-gray-primary w-1/2 h-full"></div>
              <div className="flex-column w-1/2">
                <div className="h-20 bg-gray-100"></div>
                <div className="h-20 bg-gray-200"></div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/5 px-2">
            <div className="flex w-full bg-orange-100 h-full">
              <div className="bg-light-green-primary w-1/2 h-full"></div>
              <div className="flex-column w-1/2">
                <div className="h-20 bg-light-green-100"></div>
                <div className="h-20 bg-light-green-200"></div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/5 px-2">
            <div className="flex w-full bg-orange-100 h-full">
              <div className="bg-dark-green w-full h-full"></div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default TailwindDemoPage;
