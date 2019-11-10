import React from "react";
import PropTypes from "prop-types";
import classNamesDedupe from "classnames/dedupe";

import "./Pagination.scss";

const Pagination = ({ total, limit, offset, onNextClick, onPreviousClick, onPageClick }) => {
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="pagination">
      <button
        className="pagination__nav-button pagination__nav-button-prevnext"
        disabled={currentPage === 1}
        onClick={onPreviousClick}>
        &lt;
      </button>
      <ul className="pagination__page-list inline-menu">
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <li key={pageNumber}>
              {/* {pageNumber > 1 && <span className="pagination__page-list__separator">-</span>} */}
              <span
                className={classNamesDedupe("pagination__page-list__item", {
                  "pagination__page-list__item--active": currentPage === pageNumber,
                })}
                onClick={() => onPageClick && onPageClick(pageNumber)}>
                {pageNumber}
              </span>
            </li>
          );
        })}
      </ul>
      <button
        className="pagination__nav-button pagination__nav-button-prevnext"
        disabled={currentPage === totalPages}
        onClick={onNextClick}>
        &gt;
      </button>
    </div>
  );
};

Pagination.propTypes = {
  total: PropTypes.number,
  limit: PropTypes.number,
  offset: PropTypes.number,
  onNextClick: PropTypes.func,
  onPreviousClick: PropTypes.func,
  onPageClick: PropTypes.func,
};

export default Pagination;
