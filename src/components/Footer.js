import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="page-footer font-small">
            {/* Social Media */}
            <div className="social-media">
                <a href="https://m.facebook.com/devconzm/">
                    <FaFacebookSquare 
                        size={50}
                    />
                </a>
                <a href="https://twitter.com/devcon_zm">
                    <FaTwitterSquare 
                        size={50}
                    />
                </a>
                <a href="https://www.linkedin.com/company/developer-conference-zambia-19">
                    <FaLinkedin 
                        size={50}
                    />
                </a>
                <a href="mailto:info@devcon.co.zm">
                    <FaEnvelope 
                        size={50}
                    />
                </a>
                <div>
                    <h6>Check us out on social media!</h6>
                </div>
            </div>
            {/* Social Media */}

            {/* Copyright */}
            <div className="container footer-copyright text-center py-3">
                <p>&copy;2019 <a href="http://devcon.co.zm"> DevCon Zambia</a> all rights reserved.</p>
            </div>
            {/* Copyright */}

            {/* Code of Conduct */ } 
            <div className="container footer-copyright text-center py-3">
                <a target="_blank" href = "https://github.com/devconzm/devconzm/blob/master/CODE_OF_CONDUCT.md" >Code of Conduct</a>
            </div>
            {/* Code of Conduct */ }

        </footer>
    )
}
export default Footer;