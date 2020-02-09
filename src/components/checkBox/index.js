import React from "react";
import classNames from "classnames";
import styles from "./style.module.css";
import PropTypes from "prop-types";

function CheckBox({ onChange, style, disabled, children, className, checked, ...props }) {
  const _className = classNames(styles.oc_checkmark, className);
  const _wrapper = classNames(styles.oc_container, className);

  return (
    <label className={_wrapper}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} {...props} />
      <span className={_className} style={{ ...style }} />
    </label>
  );
}

CheckBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired
};

CheckBox.defaultProps = {
  className: "",
  style: {},
  label: ""
};

export default CheckBox;
