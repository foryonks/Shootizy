import React from "react";
import PropTypes from "prop-types";
import "./ListRendererSimple.scss";
import { formatDate } from "scripts/utils/DateUtils";

const ListRendererSimple = ({ article }) => (
  <div class="listRendererSimple mea">
    <img className="mea-img image" src={article.imageMini} alt="" />
    <div class="listRendererSimple-content mea-desc">
      <div className="listRendererSimple-infos">
        <strong>{article.category.name}</strong>
        {" / "}
        <time datetime={article.date}>{formatDate(article.date)}</time>
      </div>
      <div className="listRendererSimple-title">{article.title}</div>
    </div>
  </div>
);

ListRendererSimple.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ListRendererSimple;
