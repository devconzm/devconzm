import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./style.module.css";

/**
 * renders a text box following the detailed mock in the style guide
 *
 * @param {Object} props  properties of this component
 */
function TextBox({ onChange, className, placeholder, inputType, inputName, ariaLabel, ...props }) {
  const _className = classNames(styles.oc_textbox_container, styles.oc_textbox, className);
  const _ariaLabel = ariaLabel;

  return (
    <input
      className={_className}
      placeholder={placeholder}
      type={inputType}
      name={inputName}
      aria-label={_ariaLabel}
      onChange={onChange}
      {...props}
    />
  );
}

TextBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired
};

TextBox.defaultProps = {
  className: "",
  disabled: false,
  inputType: "text"
};

/**
 * renders a textarea following the detailed mock in the style guide
 *
 * @param {Object} props  properties of this component
 */
function TextArea({ onChange, className, inputName, ...props }) {
  const _className = classNames(styles.oc_textarea_container, styles.oc_textarea, className);

  return <textarea className={_className} name={inputName} onChange={onChange} {...props} />;
}

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  inputName: PropTypes.string
};

TextArea.defaultProps = {
  className: "",
  inputName: "text",
  disabled: false,
  rows: "4",
  cols: "20"
};

export { TextBox, TextArea };
