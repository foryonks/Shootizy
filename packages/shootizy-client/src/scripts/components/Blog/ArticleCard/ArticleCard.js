import React from "react";
import { Link, withRouter } from "react-router-dom";
//import PropTypes from "prop-types";
import "./ArticleCard.scss";
import { sliceAndRemoveHTML } from "../../../utils/utils";
import Icon from "scripts/components/Icon";
import { blog } from "scripts/utils/routesManager";

const ArticleCard = ({ article, node, className = "", getArticleUrl = blog.articleUrl }) => {
  let { title, text, category, image } = article;
  const articleLink = getArticleUrl(article);

  text = sliceAndRemoveHTML(text, 20);
  className += " card-shadow";

  return React.createElement(
    node || "div",
    { className: `ArticleCard ${className}` },
    <div className="mea">
      <img className="mea-img" src={image} alt="" />
      <div className="mea-desc">
        <Link to={articleLink}>
          <h4 className="title">{title}</h4>
        </Link>
        <Link to={`/blog/category/${category.slug}`}>{category.name}</Link>
        <Link to={articleLink}>
          <p>{text}</p>
        </Link>
        <Link to={articleLink} className="link">
          <Icon name="arrow-right" className="circle-icon" /> Lire l'article
        </Link>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  // bla: PropTypes.string,
};

ArticleCard.defaultProps = {
  // bla: 'test',
};

export default withRouter(ArticleCard);
