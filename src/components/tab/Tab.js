import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import classes from "./style.module.css";

const noob = () => {};

const Tab = ({ label, onClick, style, disabled }) => (
  <div
    className={classnames(classes.tabContainer, {
      [classes.tabContainerDisabled]: disabled
    })}
    onPointerUp={onClick}
  >
    <div style={style} className={classes.tabTextContainer}>
      {label}
    </div>
  </div>
);

Tab.propTypes = {
  label: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Tab.defaultProps = {
  style: {},
  disabled: false,
  onClick: noob
};

export default Tab;
