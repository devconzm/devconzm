import PropTypes from "prop-types";
import React from "react";

function Layout({ children }) {
  return <section className="font-avenir flex flex-col">{children}</section>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
