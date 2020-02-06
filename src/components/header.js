import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { patterns } from "../components/cloudImages";

function Header() {
  return (
    <section>
      <div className="z-20 flex flex-wrap lg:flex-row bg-dark-blue-primary px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-32 pb-10 sm:pb-6 lg:pt-40 lg:pb-12 lg:pt-40 xl:pb-24 2xl:pt-56 2xl:pb-48 sm:text-left">
        <div className="absolute left-0 fixed"></div>
        <div className="w-full sm:w-1/2 lg:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 relative sm:w-2/3 lg:w-1/2 z-10 text-white">
          <h1 className="font-century text-4xl lg:text-6xl leading-tight font-bold uppercase">
            Developer Conference Zambia
          </h1>
          <div className="font-ubuntu flex flex-wrap mt-2">
            <div className="w-full sm:w-1/2 lg:w-1/2 lg:w-1/2 xl:w-1/2 text-lg lg:text-xl uppercase">
              <i className="pr-2">
                <FontAwesomeIcon icon="calendar" />
              </i>
              19TH - 20TH SEPT, 2020
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/2 lg:w-1/2 xl:w-1/2 lg:-ml-2 text-lg lg:text-xl uppercase">
              <i className="pr-2">
                <FontAwesomeIcon icon="map-marker-alt" />
              </i>
              Lusaka, Zambia
            </div>
          </div>
          <p className="text-lg lg:text-xl text-gray-700 mt-4">
            An annual tech conference <br /> for software professionals
          </p>
          <a
            href="/register"
            className="w-1/2 block sm:inline-block sm:w-auto mt-8 px-12 py-3 bg-orange-primary text-black rounded-lg text-center uppercase"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
