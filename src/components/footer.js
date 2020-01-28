import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="z-20 lg:flex bg-dark-blue-500 p-8 items-center text-center justify-between lg:px-40 text-sm">
      <div className="flex flex-col lg:flex-row">
        {[
          {
            route: "/coc",
            title: "Code of Conduct"
          },
          {
            route: "https://opencollective.com/osca",
            title: "GitHub"
          },
          {
            route: "https://blog.oscafrica.org",
            title: "2019"
          }
        ].map(link => (
          <ul className="m-0 p-0" key={link.title}>
            <li className="pb-8 lg:pr-8 lg:pb-0 p2">
              <a className="no-underline text-white text-base" href={link.route}>
                {link.title}
              </a>
            </li>
          </ul>
        ))}
      </div>
      <div className="mt-4">
        {[
          {
            key: 0,
            label: "Email",
            faIcon: ["fa", "envelope"],
            href: "mailto:info@devcon.co.zm"
          },
          {
            key: 1,
            label: "Twitter",
            faIcon: ["fab", "twitter"],
            href: "https://twitter.com/devcon_zm"
          },
          {
            key: 2,
            label: "Facebook",
            faIcon: ["fab", "facebook-square"],
            href: "https://m.facebook.com/devconzm/"
          },
          {
            key: 3,
            label: "LinkedIn",
            faIcon: ["fa", "linkedin"],
            href: "https://www.linkedin.com/company/developer-conference-zambia-19"
          }
        ].map(icon => (
          <a
            key={icon.key}
            aria-label={icon.label}
            className="font-bold p-2 no-underline text-white text-lg"
            href={icon.href}
          >
            <i className="pr-2">
              <FontAwesomeIcon icon={icon.faIcon} />
            </i>
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
