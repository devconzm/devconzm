import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <div className=" text-center ">
      <footer className="  justify-content-center page-footer font-small">
        {/* Social Media */}
        <div className="center">
          <div className="social-media">
            <a href="https://m.facebook.com/devconzm/" title="facebook">
              <FaFacebookSquare size={40} />
            </a>
            <a href="https://twitter.com/devcon_zm" title="twitter">
              <FaTwitterSquare size={40} />
            </a>
            <a
              href="https://www.linkedin.com/company/developer-conference-zambia-19"
              title="linked-in"
            >
              <FaLinkedin size={40} />
            </a>
            <a href="mailto:info@devcon.co.zm" title="email">
              <FaEnvelope size={40} />
            </a>
          </div>
          <div className="social-media-header">
            <h6>Check us out on social media!</h6>
          </div>
        </div>
        {/* Social Media */}

        {/* Copyright */}
        <div className="container footer-copyright text-center py-3">
          <p>
            &copy;2019{" "}
            <a href="http://devcon.co.zm" title="DevCon Zambia">
              {" "}
              DevCon Zambia
            </a>{" "}
            All rights reserved.
          </p>
        </div>
        {/* Copyright */}

        {/* Code of Conduct */}
        <div className="container footer-copyright text-center py-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/devconzm/devconzm/blob/releases/CODE_OF_CONDUCT.md"
            title="code of conduct"
          >
            Code of Conduct
          </a>
        </div>
        {/* Code of Conduct */}
      </footer>
    </div>
  );
}
export default Footer;
