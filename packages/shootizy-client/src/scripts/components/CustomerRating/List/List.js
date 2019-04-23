import React from "react";
import PropTypes from "prop-types";

import RatingScore from "../Score";
import usePagination from "scripts/hooks/usePagination";

const PAGE_LENGTH = 9;

const List = ({ ratings }) => {
  const { getPage, PaginationComponent } = usePagination(ratings || [], PAGE_LENGTH);

  return (
    <>
      <ul className="row row-3 row-stretch row-margin row-wrap">
        {getPage().map(({ ratingId, name, shootingDate, score, comment }, index) =>
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
