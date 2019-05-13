import React from "react";
import { Link, withRouter } from "react-router-dom";
//import PropTypes from "prop-types";
import "./Article.scss";
import { sliceAndRemoveHTML } from "../../../utils/utils";

const Article = ({ article, mode, node }) => {
  let className = "";

  let { title, text, slug, category } = article;

  if (mode === "card") {
    text = sliceAndRemoveHTML(text, 50);
    className += " card card-simple card-shadow";
  }

  return React.createElement(
    node || "div",
    { className: `Article ${className}` },
    <div>
      <Link to={`/blog/article/${slug}`}>
        <h3 className="title">{title}</h3>
      </Link>
      <Link to={`/blog/category/${category.slug}`}>{category.name}</Link>
      <Link to={`/blog/article/${slug}`}>
        <div>{text}</div>
      </Link>
    </div>
  );
};

Article.propTypes = {
  // bla: PropTypes.string,
};

Article.defaultProps = {
  // bla: 'test',
};

export default withRouter(Article);
