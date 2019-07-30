import React from "react";
import navbarBranding from "../assets/dev1.png";
import devConZmLogoPlus19 from "../assets/dev2.png";

function Header() {
  return (
    <section id="header-section">
      <div
        className="navbar fixed  navbar-expand-lg navbar-light top-navbar"
        data-toggle="sticky-onscroll"
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              title="expand-navbar"
              tabIndex="1"
            />
          </button>

          <div className="row">
            {/* Navbar Brand */}
            <div id="banner-img" className="col">
              <a className="navbar-brand" href="#header" title="DevCon Zambia">
                <img
                  className="img-fluid"
                  src={navbarBranding}
                  alt="DevConZM19"
                  title="DevConZM19"
                />
              </a>
            </div>
            {/* Navbar Brand */}

            {/* Navbar Info */}
            <div className="col">
              <div className="pr-4 pt-2 col-12 ml-auto">
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarSupportedContent"
                >
                  <nav>
                    <ul
                      className="navbar-nav pull-right smooth-scroll"
                      data-testid="head-list"
                    >
                      {/* <li className="nav-item">
                      <a className="nav-link active" href="#venue">
                        Venue
                      </a>
                    </li> */}
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#partners"
                          title="partners"
                          tabIndex="2"
                        >
                          Partners
                        </a>
                      </li>
                      {/* <li className="nav-item">
                      <a className="nav-link" href="#speakers">
                        Speakers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#tickets">
                        Tickets
                      </a>
                    </li> */}
                      <li className="nav-item">
                        <a 
                          className="nav-link" 
                          href="#about" 
                          title="about"
                          tabIndex="3"
                        >
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#code-of-conduct"
                          title="code of conduct"
                          tabIndex="4"
                        >
                          Code of Conduct
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="pl-4 pt-5 col-12">
                <img
                  className="img-fluid"
                  src={devConZmLogoPlus19}
                  alt="DevConZM19"
                  title="DevConZM19"
                />
              </div>
              <div className="pl-4 pt-5 event-date col-12">
                19th - 20th, September 2019
                <br />
              </div>
              <div className="pl-5 pt-5 col-12 text-center">
                {/* <button
                  type="button"
                  className="btn btn-outline-primary devcon"
                >
                  Register Now
                </button> */}
              </div>
            </div>
            {/* Navbar Info */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
