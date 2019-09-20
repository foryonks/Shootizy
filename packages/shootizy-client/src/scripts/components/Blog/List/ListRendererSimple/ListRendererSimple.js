import React from "react";
import PropTypes from "prop-types";
import "./ListRendererSimple.scss";
import { formatDate } from "../../../../utils/DateUtils";

const ListRendererSimple = ({ article, key }) => (
  <a href={`/blog/article/${article.slug}`} className="listRendererSimple mea" key={key}>
    <img className="mea-img image" src={article.imageMini} alt="" />
    <div className="listRendererSimple-content mea-desc">
      <div className="blog-cat-datetime">
        <span className="content-theme">{article.category.name}</span>
        {" / "}
        <span className="content-date">{formatDate(article.date)}</span>
      </div>
      <div className="listRendererSimple-title">{article.title}</div>
    </div>
  </a>
);

ListRendererSimple.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ListRendererSimple;
