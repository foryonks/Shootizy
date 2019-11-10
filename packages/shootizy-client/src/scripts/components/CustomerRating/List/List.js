import React from "react";
import PropTypes from "prop-types";

import usePagination from "scripts/hooks/usePagination";
import Smiley from "../Smiley";
import { formatDate } from "scripts/utils/DateUtils";

const ITEMS_PER_PAGE = 9;

const List = ({ ratings }) => {
  const { getCurrentPage, PaginationComponent } = usePagination(ratings || [], ITEMS_PER_PAGE);

  return (
    <>
      <ul className="row row-3 row-stretch row-margin row-wrap ratings-list">
        {getCurrentPage().map(({ ratingId, name, shootingDate, score, comment }, index) => (
          <li key={ratingId} className="card card-simple card-shadow">
            <div className="rating-score-row">
              <Smiley score={score} />
              <div className="score-number">
                {score} / 5 <span className="star-icon" />
              </div>
            </div>
            <h3 className="name">{name}</h3>
            <time>{formatDate(shootingDate)}</time>
            <p className="comment">{comment}</p>
          </li>
        ))}
      </ul>
      {PaginationComponent}
    </>
  );
};

List.propTypes = {
  ratings: PropTypes.array.isRequired,
};

export default List;
