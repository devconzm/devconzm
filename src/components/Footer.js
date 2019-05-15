import React from 'react'

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

                    <hr className="clearfix w-100 d-md-none"/>

                        {/* Grid column */}

                        <hr className="clearfix w-100 d-md-none"/>
                            {/* Grid column */}

                            <hr className="clearfix w-100 d-md-none" />

                            {/* Grid column */}
                            <div className="col-md-2 mx-auto">

                                {/* Links */}
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>

                            </div>
                            {/* Grid column */} 
        
            </div>
                        {/* Grid row */} 
        
          </div>
                    {/* Footer Links */}

                    <hr />

                    {/* Call to action */}
                    <ul className="list-unstyled list-inline text-center py-2">
                        <li className="list-inline-item">
                            <h5 className="mb-1">Tickets Available</h5>
                        </li>
                        <li className="list-inline-item">
                            <a href="#!" className="btn btn-danger btn-rounded">Register Now</a>
                        </li>
                    </ul>
                    {/* Call to action */}

                    <hr />

                    {/* Grid row */}
                    <div class="row pb-3">

                    {/* Grid column */}
                    <div class="col-md-12">

                        <div class="mb-5 flex-center">

                        {/* Facebook */}
                        <a class="fb-ic">
                            <i class="fab fa-facebook-f fa-lg white-text mr-4"> </i>
                        </a>
                        {/* Twitter */}
                        <a class="tw-ic">
                            <i class="fab fa-twitter fa-lg white-text mr-4"> </i>
                        </a>
                        {/* Google +*/}
                        <a class="gplus-ic">
                            <i class="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
                        </a>
                        {/*Linkedin */}
                        <a class="li-ic">
                            <i class="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
                        </a>
                        {/*Instagram*/}
                        <a class="ins-ic">
                            <i class="fab fa-instagram fa-lg white-text mr-4"> </i>
                        </a>
                        {/*Pinterest*/}
                        <a class="pin-ic">
                            <i class="fab fa-pinterest fa-lg white-text"> </i>
                        </a>

                        </div>

                    </div>
                    {/* Grid column */}

                    </div>

                    {/* Copyright */}
                    <div className="footer-copyright text-center py-3">© 2019 Copyright:
            <a href="http://devcon.co.zm">DevConZM19</a>
                    </div>
                    {/* Copyright */} 
        
        </footer>
                )
            }
export default Footer;