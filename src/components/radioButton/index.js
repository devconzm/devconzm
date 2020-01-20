import React from "react";
import classNames from "classnames";
import styles from "./style.module.css";
import PropTypes from "prop-types";

function RadioButton({ value, onChange, label, style, onBlur, name, children, className, checked, ...props }) {
  const _className = classNames(styles.oc_radiobutton_container, styles.oc_field, className);
  const _fieldClass = classNames(styles.oc_field_label, className);
  const _wrapper = classNames(styles.oc_wrapper, className);

  return (
    <div className={_wrapper}>
      <label className={_fieldClass} style={{ ...style }}>
        <input
          className={_className}
          type="radio"
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          checked={checked}
          {...props}
        />
        {children}
      </label>
    </div>
  );
}

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  style: PropTypes.object,
  onBlur: PropTypes.func,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired
};

RadioButton.defaultProps = {
  onBlur: undefined,
  disabled: false,
  className: "",
  style: {},
  label: ""
};

export default RadioButton;
