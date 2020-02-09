import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./style.module.css";

/**
 * renders a button following the detailed mock in the style guide
 * the types must be used to render a different kind of button
 *
 * @param {Object} props  properties of this component
 */
function Button({ onClick, children, className, type, ...props }) {
  const btnVariation = styles[type];
  const _className = classNames(styles.oc_btn_container, btnVariation, className);

  return (
    <button className={_className} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
};

Button.defaultProps = {
  className: "",
  disabled: false,
  type: "oc_btn_01"
};

// freezing the object to ensure it's immutable :)
export const buttonTypes = Object.freeze({
  oc_btn_01: "oc_btn_01",
  oc_btn_02: "oc_btn_02",
  oc_btn_03: "oc_btn_03",
  oc_btn_04: "oc_btn_04",
  oc_btn_05: "oc_btn_05",
  oc_btn_06: "oc_btn_06",
  oc_btn_07: "oc_btn_07"
});

export default Button;
