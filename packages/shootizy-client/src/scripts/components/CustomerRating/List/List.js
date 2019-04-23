import React from "react";
import PropTypes from "prop-types";

import RatingScore from "../Score";
import usePagination from "scripts/hooks/usePagination";

const ITEMS_PER_PAGE = 9;

const List = ({ ratings }) => {
  const { getCurrentPage, PaginationComponent } = usePagination(ratings || [], ITEMS_PER_PAGE);

  return (
    <>
      <ul className="row row-3 row-stretch row-margin row-wrap">
        {getCurrentPage().map(({ ratingId, name, shootingDate, score, comment }, index) =>
          ratingId ? (
            <li key={ratingId} className="card card-simple">
              <h3>{name}</h3>
              {shootingDate}
              <div>
                Rating {score} <RatingScore score={score} />
              </div>
              <p>{comment}</p>
            </li>
          ) : (
            <div className="dummyCard" key={index} />
          )
        )}
      </ul>
      {PaginationComponent}
    </>
  );
};

List.propTypes = {
  ratings: PropTypes.array.isRequired,
};

export default List;
