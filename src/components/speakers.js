import React from "react";

import { speakers, patterns } from "../components/cloudImages";

function Speaker() {
  return (
    <section id="speakers" className="bg-dark-blue-primary lg:flex-row px-4 lg:px-40 pt-12 pb-24 lg:pt-24">
      <div className="absolute left-0 fixed">
        <img className="-mt-8 lg:-mt-12 -pl-4" src={patterns.headerRec} alt="" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-8 lg:mb-12 w-full lg:w-1/2 text-white">
          <h1 className="text-sec font-bold font-ubuntu">Meet our Speakers</h1>
        </div>
        <div className="w-full hidden lg:block lg:w-1/2 pl-12 mt-10 text-white">
          <img src={patterns.section} alt="" className="w-auto" />
        </div>
      </div>

      <div className="flex flex-wrap text-white my-8">
        {[
          {
            name: "Eriol Fox",
            title: "Design Lead | Ushahidi",
            image: speakers.eriol
          },
          {
            name: "Aniedi Udo-Obong",
            title: "Developer Relations, Sub-Saharan Africa | Google",
            image: speakers.aniedi
          },
          {
            name: "Prosper Otemuyiwa",
            title: "Co-founder | Eden & forloop Africa",
            image: speakers.prosper
          },
          {
            name: "Marlene Mhangami",
            title: "Director | PSF & Co-founder | ZimboPy",
            image: speakers.marlene
          },
          {
            name: "Stephen Walli",
            title: "Principal Program Manager | Microsoft",
            image: speakers.stephen
          },
          {
            name: "Gen Ashley",
            title: "Founder | TECH(K)NOW & Lead | NASA SpaceApps",
            image: speakers.ashley
          },
          {
            name: "Henry Zhu",
            title: "Maintainer | Babel & Open Source Advocate",
            image: speakers.henry
          }
        ].map(speaker => (
          <figure key={speaker.name} className="relative w-full h-full lg:w-1/4 max-w-sm rounded p-2 my-2">
            <img className="w-auto mx-auto" src={speaker.image} alt={`An amazing photograph of ${speaker.name}.`} />
            <div className="z-0 -mt-20 pt-2 px-2 w-auto h-20 bg-dark-blue-500 opacity-75 text-center text-white">
              <h3 className="font-bold text-xl">{speaker.name}</h3>
              <p className="text-sm">{speaker.title}</p>
            </div>
          </figure>
        ))}
      </div>

      <div className="relative mt-12 text-center lg:text-right">
        <a href="/speakers" className="px-6 py-3 border-2 border-white text-white rounded-lg uppercase">
          See all Speakers
        </a>
      </div>
    </section>
  );
}

export default Speaker;
