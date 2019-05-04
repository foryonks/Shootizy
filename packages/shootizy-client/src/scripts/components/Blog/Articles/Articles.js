import React from "react";
//import PropTypes from "prop-types";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import "./Articles.scss";
import Article from "../Article";

const Articles = () => {
  const { contents: articles } = useRemoteContents("/api/blog/articles", []);

  return (
    <ul className="BlogArticles row row-3 row-stretch row-margin row-wrap">
      {articles
        .fillMultiple(3, { hidden: true })
        .map((article, index) =>
          article.hidden ? (
            <li key={"key" + index} />
          ) : (
            <Article key={article.articleId} article={article} mode="card" node="li" />
          )
        )}
    </ul>
  );
};

Articles.propTypes = {
  // bla: PropTypes.string,
};

Articles.defaultProps = {
  // bla: 'test',
};

export default Articles;
