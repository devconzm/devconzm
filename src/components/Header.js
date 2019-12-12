import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import navbarBranding from '../assets/dev1.png';
import devConZmLogoPlus19 from '../assets/dev2020.png';

function Header() {
  const styles = {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#420042',
    textDecoration: 'none',
    marginLeft: '15px'
  };
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
            <span className="navbar-toggler-icon" title="toggle-navigation" />
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
                        <NavLink
                          smooth
                          activeClassName={"active"}
                          style={styles}
                          to="/#partners"
                        >
                          Partners
                        </NavLink>
                      </li>
     */}
                      {/* <li className="nav-item">
                        <NavLink
                          smooth
                          activeClassName={"active"}
                          style={styles}
                          to="/schedule"
                        >
                          Schedule
                        </NavLink>
                      </li> */}

                      <li className="nav-item">
                        <NavLink
                          smooth
                          style={styles}
                          activeClassName={'active'}
                          to="/#about"
                        >
                          About
                        </NavLink>
                      </li>
                      {/* <li className="nav-item">
                        <NavLink
                          smooth
                          activeClassName={"active"}
                          style={styles}
                          to="/speakers#speakers"
                        >
                          Speakers
                        </NavLink>
                      </li> */}
                      <li className="nav-item">
                        <NavLink
                          smooth
                          activeClassName={'active'}
                          style={styles}
                          to="/coc#code-of-conduct"
                        >
                          C.O.C
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* The section below can be rendered conditionally so that it doesn't show on some pages */}
              <div className="pl-4 pt-5 col-12">
                <img
                  className="img-fluid"
                  src={devConZmLogoPlus19}
                  alt="DevConZM19"
                  title="DevConZM19"
                />
              </div>
              <div className="pl-4 pt-5 event-date col-12">
                <h1>19th - 20th, September 2020</h1>
                <br />
              </div>
              <div className="pl-5 pt-5 col-12 text-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
