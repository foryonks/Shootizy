import React from "react";
import PropTypes from "prop-types";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import "./ListComments.scss";

const ListComments = ({ sortBy, order, count, title }) => {
  const { contents: comments } = useRemoteContents(`/api/blog/comments/`, {
    method: "POST",
    body: {
      sortBy,
      order,
      count,
    },
  });

  return (
    <div className="ListCommentsWrapper">
      <h3 className="Blog-block-title">{title || "Nouveaux Com'"}</h3>
      <ul className="comments">
        {comments &&
          comments.map(({ _id, author, article }) => (
            <li key={_id}>
              <div>
                <strong>{author}</strong> sur{" "}
                <strong>
                  <a href={`/blog/article/${article.slug}`}>{article.title}</a>
                </strong>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

ListComments.propTypes = {
  sortBy: PropTypes.string,
  sortDirection: PropTypes.string,
};

ListComments.defaultProps = {
  sortBy: "date",
  sortDirection: "asc",
};

export default ListComments;
