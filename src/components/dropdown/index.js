import React, { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";
import classNames from "classnames";

import caretImg from "./dropdown-caret.png";

const Dropdown = ({ placeholder, value, options, onChange, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = useMemo(() => {
    const option = options.find(({ value: v }) => v === value);
    return option ? option.label : placeholder;
  }, [options, placeholder, value]);

  const handleSelect = value => () => {
    setIsOpen(false);
    onChange(value);
  };

  const close = e => {
    if (e.target.closest(`.${style.dropdown}`) || !isOpen) return;
    setIsOpen(false);
  };

  useEffect(() => {
    document.documentElement.addEventListener("pointerdown", close);
    return () => document.documentElement.removeEventListener("pointerdown", close);
  });

  return (
    <div className={classNames(style.dropdown, props.className)} {...props}>
      <div onPointerDown={() => setIsOpen(open => !open)} className={style.dropdownInput}>
        <div className={style.dropdownText}>{selectedLabel}</div>
        <object aria-label="caret" className={style.caret} data={caretImg}>
          caret
        </object>
      </div>
      <div className={isOpen ? style.dropdownOptions : style.dropdownOptionsClosed}>
        {options.map(({ label, value: val }) => (
          <div
            key={val}
            className={val === value ? style.selectedOption : style.option}
            onPointerDown={handleSelect(val)}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string
};

Dropdown.defaultProps = {
  placeholder: "Select",
  className: ""
};

export default Dropdown;
