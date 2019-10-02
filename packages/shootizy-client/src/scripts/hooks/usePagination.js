import React from "react";
import { useState } from "react";

import Pagination from "scripts/components/Pagination";

/**
 * Pagination properties
 * @param {array} list list to be paginated
 * @param {number} [defaultLimit]
 */
const usePagination = (list, defaultLimit = 5) => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(defaultLimit);

  const handleNextClick = () => setOffset(offset => offset + limit);
  const handlePreviousClick = () => setOffset(offset => offset - limit);
  const handleChangeLimit = limit => setLimit(limit);

  /**
   * Page number click handler
   * @param {number} pageNumber 1 index based
   */
  const handlePageClick = pageNumber => setOffset(limit * (pageNumber - 1));

  /**
   * Get page (only for local pagination)
   * @returns {array}
   */
  const getCurrentPage = () => list.slice(offset, Math.min(offset + limit, list.length));

  const PaginationComponent = list.length > defaultLimit && (
    <Pagination
      total={list.length}
      limit={limit}
      offset={offset}
      onNextClick={handleNextClick}
      onPreviousClick={handlePreviousClick}
      onPageClick={handlePageClick}
    />
  );

  return {
    offset,
    limit,
    handleNextClick,
    handlePreviousClick,
    handleChangeLimit,
    getCurrentPage,
    PaginationComponent,
  };
};

export default usePagination;
