import React from "react";
//import PropTypes from "prop-types";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import "./List.scss";
import ArticleCard from "../ArticleCard";

const List = ({ items }) => {
  if (!items) {
    let { contents: articles } = useRemoteContents("/api/blog/articles", []);
    items = articles;
  }
  if (!items) return null;

  return (
    <ul className="BlogArticles row row-2 row-stretch row-margin row-wrap container-2">
      {items
        .fillMultiple(3, { hidden: true })
        .map((article, index) =>
          article.hidden ? (
            <li key={"key" + index} />
          ) : (
            <ArticleCard key={article.articleId} article={article} mode="card" node="li" />
          )
        )}
    </ul>
  );
};

List.propTypes = {
  // bla: PropTypes.string,
};

List.defaultProps = {
  // bla: 'test',
};

export default List;
