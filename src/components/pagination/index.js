import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import classes from "./style.module.css";

const Pagination = ({ currentPage, totalCount, onChange, resultsPerPage }) => {
  const noOfPages = Math.ceil(totalCount / resultsPerPage);
  if (noOfPages <= 1) return null;

  const handleClick = page => () =>
    onChange({
      page,
      start: resultsPerPage * page,
      end: Math.min(totalCount, resultsPerPage * (page + 1))
    });

  const isDisabled = dir => {
    if (dir === "left") return currentPage === 0;
    if (dir === "right") return currentPage + 1 === noOfPages;
  };

  const renderButton = i => (
    <button
      key={i}
      className={classNames(classes.paginationButton, {
        [classes.active]: currentPage === i
      })}
      onClick={handleClick(i)}
    >
      {i + 1}
    </button>
  );

  const generatePaginationButtons = () => {
    let start = 0,
      buttonCount = 10;
    if (noOfPages <= 10) buttonCount = noOfPages;
    else if (currentPage < 6) start = 0;
    else if (currentPage > noOfPages - 5) start = noOfPages - 10;
    else start = currentPage - 5;
    return Array(buttonCount)
      .fill(start)
      .map((start, i) => renderButton(i + start));
  };

  return (
    <div className="pagination">
      <button
        disabled={isDisabled("left")}
        className={classNames([classes.paginationButton], {
          [classes.disabled]: isDisabled("left")
        })}
        onClick={handleClick(currentPage - 1)}
      >
        &#10148;
      </button>
      {generatePaginationButtons()}
      <button
        disabled={isDisabled("right")}
        className={classNames([classes.paginationButton], {
          [classes.disabled]: isDisabled("right")
        })}
        onClick={handleClick(currentPage + 1)}
      >
        &#10148;
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  resultsPerPage: PropTypes.number
};

Pagination.defaultProps = {
  resultsPerPage: 10
};

export default Pagination;
