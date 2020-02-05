import React from "react";

import { sponsors, patterns } from "../components/cloudImages";

const sponsorsData = [
  {
    tier: "cobalt",
    name: "PubNub",
    image: sponsors.pubnub,
    link: "https://pubnub.com"
  },
  {
    tier: "cobalt",
    name: "Amazon Web Services",
    image: sponsors.aws,
    link: "https://aws.amazon.com/"
  },
  {
    tier: "inkind",
    name: "Jet Brains",
    image: sponsors.jetbrains,
    link: "https://www.jetbrains.com"
  },
  {
    tier: "inkind",
    name: "Sticker Mule",
    image: sponsors.stickermule,
    link: "https://www.stickermule.com/supports/you"
  },
  {
    tier: "inkind",
    name: "GitKraken",
    image: sponsors.gitkraken,
    link: "https://www.gitkraken.com"
  },
  {
    tier: "community",
    name: "BongoHive",
    image: sponsors.bongohive,
    link: "https://www.bongohive.co.zm"
  },
  {
    tier: "community",
    name: "Asikana Network",
    image: sponsors.asikana,
    link: "https://asikananetwork.org"
  },
  {
    tier: "community",
    name: "Agora Code Community",
    image: sponsors.agora,
    link: "https://github.com/agora-code-community"
  }
];

function Sponsors() {
  return (
    <section id="sponsors" className="bg-white-smoke lg:flex-row px-4 lg:px-40 pt-12 pb-20 lg:pt-24">
      <div className="absolute left-0 fixed">
        <img className="-mt-8 lg:-mt-12 -pl-4" src={patterns.headerRec} alt="" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-8 lg:mb-12 w-full lg:w-1/2 text-dark-blue-primary-600">
          <h1 className="text-sec font-bold font-ubuntu">Previous Partners</h1>
        </div>
        <div className="w-full hidden lg:block lg:w-1/2 pl-12 mt-10">
          <img src={patterns.section} alt="" className="w-auto" />
        </div>
      </div>

      <div className="my-12">
        {/* Headline Sponsors */}
        <h1 className="line text-h1 font-bold">
          Cobalt <span></span>
        </h1>
        <div className="mt-4 mb-8 lg:mt-2 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("cobalt"))
            .map(sponsor => (
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                key={sponsor.name}
                className="relative lg:w-1/4 max-w-sm rounded px-3 my-12"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Diamond sponsors */}
        <h1 className="line text-h2 font-bold">
          Others <span></span>
        </h1>
        <div className="mt-4 mb-8 lg:mt-2 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("inkind"))
            .map(sponsor => (
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                key={sponsor.name}
                className="relative lg:w-1/4 max-w-sm rounded px-3 my-12"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Community sponsors */}
        <h1 className="line text-h3 font-bold">
          Community <span></span>
        </h1>
        <div className="mt-4 mb-8 lg:mt-2 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("community"))
            .map(sponsor => (
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                key={sponsor.name}
                className="relative lg:w-1/4 max-w-sm rounded px-3 my-12"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsor.image} alt={`${sponsor.name}'s Logo.`} />
                </figure>
              </a>
            ))}
        </div>
      </div>

      <div className="relative mt-18 text-center">
        <a
          href="https://opencollective.com/open-source-festival-2020-4abe0517/donate"
          className="bg-orange-primary text-brown px-6 py-4 rounded-lg uppercase"
        >
          Become a Sponsor
        </a>
      </div>
    </section>
  );
}

export default Sponsors;
