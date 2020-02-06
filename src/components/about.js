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
    <div className="lg:flex-row px-2 lg:px-5 pt-12 pb-20 lg:pt-4">
      <div className="absolute left-0 fixed "></div>
      <div className="flex flex-wrap pl-10 mx-20">
        <div className="mb-0 lg:mb-0 w-full lg:w-1/2 text-dark-blue-primary-600">
          <h1 id="about" className="text-sec font-bold font-century">
            About
          </h1>
        </div>
        <div className="w-full hidden lg:block lg:w-1/2 pl-12 mt-10">
          <img src={patterns.section} alt="" className="w-auto" />
        </div>
      </div>

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
            community in Zambia. It is specifically crafted with Software Developers and Tech Enthusiasts in mind. Its
            aim is first of all, to raise the quality of the craft, secondly, to raise awareness of the industry which
            is still in its infancy in Zambia. We believe that providing a platform for developers to level up is key to
            a progressive approach to building products and communities. <br />
            <br />
            DevConZM brings exposure that will prove useful to innovation in various industrial sectors leading to
            direct economic value addition. Apart from the technical opportunities available, Devcon will also give
            developers access to networking and investment opportunities which is critical to growth. <br />
            <br />
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default About;
