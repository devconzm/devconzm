import React, { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";
import classNames from "classnames";

import cancelImg from "./searchbar-cancel.png";
import searchImg from "./searchbar-search.png";

const noob = () => {};

const SearchBar = ({ placeholder, value, options, onChange, onInput, label, renderItem, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [textVal, setTextVal] = useState(() => {
    const option = options.find(({ value: v }) => v === value);
    return option ? option.label : "";
  });

  /**
   * Fired when an option is selected from the dropdown
   */
  const handleChange = ({ value, label }) => () => {
    setIsOpen(false);
    setTextVal(label);
    onChange(value);
  };

  /**
   * Fired on text input
   * Sets the input element vaue and fires the `onInput` event
   */
  const handleInput = ({ target }) => {
    if (!isOpen) setIsOpen(true);
    setTextVal(target.value);
    onInput(target.value);
  };

  /**
   * Filters the options based on the input value.
   * Filtered options containes options whose labels match the text value
   */
  const filteredOptions = useMemo(
    () => options.filter(({ label }) => label.toLowerCase().includes(textVal.toLowerCase())),
    [options, textVal]
  );

  /**
   * Closes the dropdown if anyother part of the page is clicked
   * except the searchbar
   */
  const close = e => {
    if (e.target.closest(`.${style.searchbar}`) || !isOpen) return;
    setIsOpen(false);
  };

  useEffect(() => {
    document.documentElement.addEventListener("pointerdown", close);
    return () => document.documentElement.removeEventListener("pointerdown", close);
  });

  return (
    <div className={classNames(style.searchbar, props.className)} {...props}>
      <label>
        {!!label && <div className={style.label}>{label}</div>}
        <div className={style.searchbarInput} onPointerDown={() => setIsOpen(true)}>
          <object aria-label="Search Icon" className={style.searchImg} data={searchImg}>
            search icon
          </object>
          <input type="text" value={textVal} inputMode="search" onChange={handleInput} />
          <object
            onPointerDown={() => setTextVal("")}
            aria-label="Cancel icon"
            className={style.cancelImg}
            data={cancelImg}
          >
            cancel icon
          </object>
        </div>
      </label>
      <div className={isOpen ? style.searchOptions : style.searchOptionsClosed}>
        {filteredOptions.slice(0, 5).map((option, i) =>
          typeof renderItem === "function" ? (
            <div onPointerDown={handleChange(option)}>{renderItem(option, i)}</div>
          ) : (
            <div key={option.value} className={style.searchOption} onPointerDown={handleChange(option)}>
              {option.label}
            </div>
          )
        )}
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })
  ).isRequired,
  onInput: PropTypes.func,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  renderItem: PropTypes.func
};

SearchBar.defaultProps = {
  placeholder: "Search bar",
  className: "",
  onInput: noob,
  onChange: noob,
  label: "",
  renderItem: null
};

export default SearchBar;
