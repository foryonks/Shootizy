import React from "react";
import PropTypes from "prop-types";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import "./List.scss";
import ArticleCard from "../ArticleCard";

const List = ({ render, cols, hidden, className, sortBy, items, remoteContentsUrl }) => {
  let { contents: list } = useRemoteContents(remoteContentsUrl, {
    initialState: items,
  });
  if (items) {
    list = items;
  }
  if (!list) return null;
  className += cols >= 2 ? ` row row-${cols} row-stretch row-margin row-wrap` : "";
  return (
    <ul className={`BlogArticles ${className}`}>
      {list
        .fillMultiple(cols, { hidden })
        .map((article, index) =>
          article.hidden ? (
            <li key={"key" + index} />
          ) : render ? (
            render({ article, key: article.articleId })
          ) : (
            <ArticleCard key={article.articleId} article={article} mode="card" node="li" />
          )
        )}
    </ul>
  );
};

List.propTypes = {
  cols: PropTypes.number,
  hidden: PropTypes.bool,
  className: PropTypes.string,
};

List.defaultProps = {
  cols: 1,
  hidden: false,
  className: "",
};

export default List;
