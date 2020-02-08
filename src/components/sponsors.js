import React from "react";

import { sponsors, patterns } from "../components/cloudImages";

const sponsorsData = [
  {
    tier: "cobalt",
    name: "PubNub",
    image: sponsors.pubnub,
    link: "https://www.pubnub.com/"
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
    link: "https://www.jetbrains.com/"
  },
  {
    tier: "inkind",
    name: "Sticker Mule",
    image: sponsors.stickermule,
    link: "https://www.stickermule.com/"
  },
  {
    tier: "inkind",
    name: "GitKraken",
    image: sponsors.gitkraken,
    link: "https://www.gitkraken.com/"
  },
  {
    tier: "community",
    name: "BongoHive",
    image: sponsors.bongohive,
    link: "https://bongohive.co.zm/"
  },
  {
    tier: "community",
    name: "Asikana Network",
    image: sponsors.asikana,
    link: "https://asikananetwork.org/"
  },
  {
    tier: "community",
    name: "Agora Code Community",
    image: sponsors.agora,
    link: "https://agoracode.community/"
  }
];

function Sponsors() {
  return (
    <section id="sponsors" className="bg-white-smoke lg:flex-row px-4 lg:px-40 pt-12 pb-20 lg:pt-24">
      <div className="absolute left-0 fixed"></div>
      <div className="flex flex-wrap flex-horizontal-center">
        <div className="mb-8 lg:mb-12 w-full text-center text-dark-blue-primary-600">
          <h1 className="text-sec font-bold font-century ">Previous Partners</h1>
        </div>
      </div>

      <div className="my-12">
        {/* Headline Sponsors */}
        <h1 className="line text-h1 text-center font-bold">
          <span></span> Cobalt <span></span>
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
        <h1 className="line text-h2 text-center font-bold">
          <span></span>Others <span></span>
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
        <h1 className="line text-h3 text-center font-bold">
          <span></span> Community <span></span>
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
          target="_blank"
          rel="noopener noreferrer"
          href="https://trello-attachments.s3.amazonaws.com/5d5177cae71d172fb4f23b36/5d517ecea05da73835f7d071/0de8c37640957385ac9379478e049a00/DevConZM_19_Sponsorship_Desk.pdf"
          className="bg-orange-primary text-brown px-6 py-4 rounded-lg uppercase"
        >
          Become a Sponsor
        </a>
        <p className="pt-4">or</p>
        <p className="text-h4">
          mail us on{" "}
          <a className="underline" href="mailto:info@devcon.co.zm">
            info@devcon.co.zm
          </a>
        </p>
      </div>
    </section>
  );
}

export default Sponsors;
