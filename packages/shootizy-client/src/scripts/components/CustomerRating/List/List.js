import React from "react";
import PropTypes from "prop-types";

import usePagination from "scripts/hooks/usePagination";
import Smiley from "../Smiley";
import { formatDate } from "scripts/utils/DateUtils";
import Columned from "react-columned";

const ITEMS_PER_PAGE = 9;

const List = ({ ratings, className }) => {
  const { getCurrentPage, PaginationComponent } = usePagination(ratings || [], ITEMS_PER_PAGE);

  return (
    <div className={className}>
      <Columned className="ratings-list" columns={{ "480": 1, "800": 2, "1000": 3 }}>
        {getCurrentPage().map(({ ratingId, name, shootingDate, score, comment }, index) => (
          <div key={ratingId} className="card card-simple card-shadow">
            <div className="rating-score-row">
              <Smiley score={score} />
              <div className="score-number">
                {score} / 5 <span className="star-icon" />
              </div>
            </div>
            <h3 className="name">{name}</h3>
            <time>{formatDate(shootingDate)}</time>
            <p className="comment">{comment}</p>
          </div>
        ))}
      </Columned>
      {PaginationComponent}
    </div>
  );
};

List.propTypes = {
  ratings: PropTypes.array.isRequired,
};

export default List;
