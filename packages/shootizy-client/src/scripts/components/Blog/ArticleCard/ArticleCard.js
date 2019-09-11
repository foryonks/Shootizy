import React from "react";
import { Link, withRouter } from "react-router-dom";
//import PropTypes from "prop-types";
import "./ArticleCard.scss";
import { sliceAndRemoveHTML } from "../../../utils/utils";
//import Icon from "scripts/components/Icon";
import { blog } from "scripts/utils/routesManager";
import { formatDateStd } from "../../../utils/DateUtils";

const ArticleCard = ({ article, node, className = "", getArticleUrl = blog.articleUrl }) => {
  let { title, text, category, imageMini, date } = article;
  const articleLink = getArticleUrl(article);

  text = sliceAndRemoveHTML(text, 20);
  className += " card-shadow";

  return React.createElement(
    node || "div",
    { className: `ArticleCard ${className}` },
    <div>
      <div className="img" style={{ backgroundImage: `url(${imageMini})` }} />
      <div className="card-desc">
        <div className="blog-cat-datetime">
          <Link className="content-theme" to={`/blog/category/${category.slug}`}>
            {category.name}
          </Link>
          {" / "}
          <span className="content-date">{formatDateStd(date)}</span>
        </div>

        <Link to={articleLink} className="title-link">
          <h4 className="title">{title}</h4>
        </Link>

        <Link to={articleLink}>
          <p>{text}</p>
        </Link>
        {/* <Link to={articleLink} className="link">
          <Icon name="arrow-right" className="circle-icon" /> Lire l'article
        </Link> */}
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
