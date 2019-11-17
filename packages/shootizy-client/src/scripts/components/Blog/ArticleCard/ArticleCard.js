import React from "react";
import { Link, withRouter } from "react-router-dom";
import { bool } from "prop-types";
import "./ArticleCard.scss";
import { sliceAndRemoveHTML } from "../../../utils/utils";
//import Icon from "scripts/components/Icon";
import { blog } from "scripts/utils/routesManager";
import { formatDateStd } from "../../../utils/DateUtils";

const ArticleCard = ({
  article,
  node,
  className = "",
  getArticleUrl = blog.articleUrl,
  history,
  showDesc,
}) => {
  let { title, text, category, imageMini, date, commentsCount } = article;
  const articleLink = getArticleUrl(article);

  text = sliceAndRemoveHTML(text, 30);
  className += " card-shadow";

  return React.createElement(
    node || "div",
    { className: `ArticleCard ${className}` },
    <div
      onClick={() => {
        history.push(articleLink);
      }}>
      <div className="img" style={{ backgroundImage: `url('${imageMini}')` }} />
      <div className="card-desc">
        {category && (
          <div className="blog-cat-datetime">
            <Link className="content-theme" to={`/blog/category/${category.slug}`}>
              {category.name}
            </Link>
            {" / "}
            <span className="content-date">{formatDateStd(date, "DD/MM/YYYY")}</span>
          </div>
        )}

        <span className="commentsCount">
          <svg width="35px" height="35px" viewBox="0 0 35 35" version="1.1">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="HOME" transform="translate(-675.000000, -7330.000000)">
                <rect fill="#FFFFFF" x="0" y="0" width="1920" height="9077" />
                <g id="Blog" transform="translate(0.000000, 6630.000000)">
                  <g id="Tuile-Copy-2" transform="translate(370.000000, 391.000000)">
                    <g id="Com" transform="translate(305.000000, 309.000000)">
                      <g>
                        <path
                          d="M0,35 L0,18 C0.00235107733,17.8342965 0,17.6674228 0,17.5 C0,7.83501688 7.83501688,0 17.5,0 C27.1649831,0 35,7.83501688 35,17.5 C35,26.9975603 27.434078,34.7280049 18.0005898,34.992978 L18,35 L17.5,35 L17.5,35 L0,35 Z"
                          id="Combined-Shape"
                          fill="#00F6D6"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <span className="numText">{commentsCount}</span>
        </span>

        <Link to={articleLink} className="title-link">
          <h4 className="title">{title}</h4>
        </Link>

        {showDesc ? (
          <Link to={articleLink} className="ArticleCard-text">
            <p>
              {showDesc} {text}
            </p>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  showDesc: bool,
};

ArticleCard.defaultProps = {
  showDesc: true,
};
export default withRouter(ArticleCard);
