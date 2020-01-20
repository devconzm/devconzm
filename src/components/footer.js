import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="z-20 lg:flex bg-dark-blue-500 p-8 items-center text-center justify-between lg:px-40 text-sm">
      <div className="flex flex-col lg:flex-row">
        {[
          {
            route: "https://git.io/Jemzv",
            title: "Code of Conduct"
          },
          {
            route: "https://oscafrica.org/community",
            title: "Community"
          },
          {
            route: "https://opencollective.com/osca",
            title: "Open Collective"
          },
          {
            route: "https://blog.oscafrica.org",
            title: "Blog"
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
            href: "mailto:info@oscafrica.org"
          },
          {
            key: 1,
            label: "Twitter",
            faIcon: ["fab", "twitter"],
            href: "https://twitter.com/oscafrica"
          },
          {
            key: 2,
            label: "Facebook",
            faIcon: ["fab", "facebook-square"],
            href: "https://facebook.com/opensourcecommunityafrica"
          },
          {
            key: 3,
            label: "GitHub",
            faIcon: ["fab", "github"],
            href: "https://github.com/oscommunityafrica"
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
