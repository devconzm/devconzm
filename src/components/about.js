import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { patterns } from "../components/cloudImages";

function About() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <section className="flex flex-col lg:flex-row items-center my-16 mx-4 lg:mx-32">
      <figure className="w-full lg:w-1/2">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/k4q6gGcslA0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          title="DevCon Zambia"
          allowFullScreen
        ></iframe>
        {/* <img className="pb-4 lg:pl-4" alt={`${site.siteMetadata.title}.`} src={patterns.nextBillion} /> */}
      </figure>

      <div className="lg:w-1/2 lg:mx-12">
        <blockquote className="px-4 text-base text-justify tracking-tight text-dark-blue-500">
          DevConZM is an annual platform elected by Agora Code Community and collective members of the technology
          community in Zambia. It is specifically crafted with Software Developers and Tech Enthusiasts in mind. Its aim
          is first of all, to raise the quality of the craft, secondly, to raise awareness of the industry which is
          still in its infancy in Zambia. We believe that providing a platform for developers to level up is key to a
          progressive approach to building products and communities. <br />
          <br />
          DevConZM brings exposure that will prove useful to innovation in various industrial sectors leading to direct
          economic value addition. Apart from the technical opportunities available, Devcon will also give developers
          access to networking and investment opportunities which is critical to growth. <br />
          <br />
        </blockquote>
      </div>
      <div className="hidden lg:block absolute right-0 fixed">
        <img className="-mt-24 -mb-12 -pl-4" src={patterns.africanMap} alt="" />
      </div>
    </section>
  );
}

export default About;
