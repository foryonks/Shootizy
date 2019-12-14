import React from "react";
import { array, number } from "prop-types";
import "./BlogMultipleArticleCarousel.scss";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";

import { toMatrix } from "scripts/utils/utils";
import ArticleCard from "../ArticleCard";

const BlogMultipleArticleCarousel = ({ articles, cols, ...props }) => {
  let dataMatrix = toMatrix(articles, cols, { fill: true });

  return (
    <div className="BlogMultipleArticleCarouselWrapper blog-carousel">
      <div className="carouselWrapper-fixshadow">
        <CarouselResponsive
          infiniteLoop
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          {...props}>
          {dataMatrix.map((row, index) => (
            <div className={`slideRow container-2 cols-${cols}`} key={index}>
              {row.map(article =>
                article ? (
                  <ArticleCard
                    className="carousel-item"
                    key={article.articleId}
                    article={article}
                    mode="card"
                  />
                ) : null
              )}
            </div>
          ))}
        </CarouselResponsive>
      </div>
    </div>
  );
};

BlogMultipleArticleCarousel.propTypes = {
  articles: array,
  cols: number,
};

BlogMultipleArticleCarousel.defaultProps = {
  articles: [],
  cols: 2,
};

export default BlogMultipleArticleCarousel;
