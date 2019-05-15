import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <footer className="page-footer font-small stylish-color-dark pt-4">

            {/* Footer Links */}
            <div className="container text-center text-md-left">

                {/* Grid row */}
                <div className="row">

                    {/* Grid column */}
                    <div className="col-md-4 mx-auto">

                        {/* Content */}
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                          consectetur
                  adipisicing elit.</p>

                    </div>
                    {/* Grid column */}

                    <hr className="clearfix w-100 d-md-none" />

                    {/* Grid column */}

                    <hr className="clearfix w-100 d-md-none" />
                    {/* Grid column */}

                    <hr className="clearfix w-100 d-md-none" />

                    {/* Grid column */}
                    <div className="col-md-2 mx-auto">

                        {/* Links */}
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                        <ul className="list-unstyled">
                        <li>
                            <a href="#venue">Venue</a>
                        </li>
                        <li>
                            <a href="#partners">Partners</a>
                        </li>
                        <li>
                            <a href="#agenda">Agenda</a>
                        </li>
                        <li>
                            <a href="#speakers">Speakers</a>
                        </li>
                        <li>
                            <a href="#tickets">Tickets</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#contact_us">Contact Us</a>
                        </li>
                        </ul>
                    </div>
                    {/* Grid column */}
                </div>
                {/* Grid row */}
            </div>
            {/* Footer Links */}
            {/* Call to action */}
            <ul className="list-unstyled list-inline text-center py-2">
                <li className="list-inline-item">
                    <h5 className="mb-1">Tickets Available</h5>
                </li>
                <li className="list-inline-item">
                    <a href="#header" className="btn btn-danger btn-rounded">Register Now</a>
                </li>
            </ul>
            {/* Call to action */}
            <div className="row pb-3">

                {/* Grid column */}
                <div className="col-md-12">

                    <div className="mb-5 text-center">

                        {/* Facebook */}
                        <a href="#header" className="fb-ic">
                            <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" className="mr-4" />
                        </a>
                        {/* Twitter */}
                        <a href="#header" className="tw-ic">
                            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" className="mr-4" />
                        </a>
                        {/* Google +*/}
                        <a href="#header" className="gplus-ic">
                            <FontAwesomeIcon icon={['fab', 'google']} size="2x" className="mr-4" />
                        </a>
                        {/*Linkedin */}
                        <a href="#header" className="li-ic">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" className="mr-4" />
                        </a>
                        {/*Instagram*/}
                        <a href="#header" className="ins-ic">
                            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" className="mr-4" />
                        </a>
                        {/*Pinterest*/}
                        <a href="#header" className="pin-ic">
                            <FontAwesomeIcon icon={['fab', 'pinterest']} size="2x" className="mr-4" />
                        </a>

                    </div>

                </div>
                {/* Grid column */}
            </div>

            {/* Copyright */}
            <div className="footer-copyright text-center py-3">© 2019 Copyright:
            <a href="http://devcon.co.zm"> DevConZM19</a>
            </div>
            {/* Copyright */}

        </footer>
    )
}
export default Footer;