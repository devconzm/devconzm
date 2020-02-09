import React from "react";

import { patterns } from "../components/cloudImages";

function TravelHead() {
  return (
    <section>
      <div className="bg-dark-blue-primary w-full h-full z-20 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-12 pb-10 sm:pb-6 lg:pt-32 lg:pt-32 xl:pb-24 2xl:pt-56 2xl:pb-48">
        <div className="absolute left-0 fixed">
          <img className="-mt-24 -mb-12 -pl-4" src={patterns.headerRec} alt="" />
        </div>
        <div className="text-white items-center py-32">
          <h1 className="font-ubuntu text-4xl lg:text-6xl leading-tight font-bold uppercase">Zone Tech Park</h1>
          <p className="text-lg lg:text-xl text-gray-700 mt-4">
            Plot 9 Gbagada Industrial Scheme, Beside UPS, Gbagada Expressway
          </p>
          <a
            href="https://www.google.com/maps/dir/7.7841286,6.7386955/zone+tech+park+maps/@7.1903097,2.8104773,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x103b8d73a658782b:0x7a1de11d89cccc84!2m2!1d3.37684!2d6.5514308"
            className="w-1/2 block sm:inline-block sm:w-auto mt-8 px-12 py-3 bg-orange-primary text-black rounded-lg text-center uppercase"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Map
          </a>
        </div>
      </div>
    </section>
  );
}

export default TravelHead;
