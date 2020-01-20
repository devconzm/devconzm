import { Link } from "gatsby";
import React, { useState } from "react";

import { logo, patterns } from "../components/cloudImages";

function Nav() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="z-50 shadow-2xl w-full bg-dark-blue-primary fixed top-0 left-0 px-2 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-1">
      <div className="absolute left-0 fixed">
        <img className="-pl-4" src={patterns.navRec} alt="" />
      </div>
      <div className="flex flex-wrap items-center justify-between max-w-8xl mx-auto p-2 lg:py-8">
        <Link className="z-20 flex items-center no-underline text-white" to="/">
          <img alt="Open Source Community Africa Logo." className="block mx-auto w-12" src={logo.test} />
        </Link>

        <button
          className="block lg:hidden flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg className="fill-current h-4 w-8" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <line y1="1" x2="25" y2="1" stroke="white" strokeWidth="2" />
            <path d="M6 10H25" stroke="white" strokeWidth="2" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? "block" : "hidden"
          } w-full text-center lg:block lg:flex lg:items-center lg:w-auto mt-2`}
        >
          {[
            {
              route: "/schedule",
              title: "Register"
            },
            {
              route: "/#speakers",
              title: "Speakers"
            },
            {
              route: "/schedule",
              title: "Schedule"
            },
            {
              route: "/travel",
              title: "Travel"
            },
            {
              route: "/#sponsors",
              title: "Sponsorship"
            }
          ].map(link => (
            <a
              className="block lg:inline-block mt-4 lg:-my-2 lg:ml-8 no-underline text-white text-sm uppercase"
              key={link.title}
              href={link.route}
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Nav;
