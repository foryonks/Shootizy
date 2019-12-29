import React from "react";
import { array, number } from "prop-types";
import "./BlogMultipleArticleCarousel.scss";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";

import { toMatrix } from "scripts/utils/utils";
import ArticleCard from "../ArticleCard";
import useMediaQuery, { phone } from "scripts/hooks/useMediaQuery";

const BlogMultipleArticleCarousel = ({ articles, cols, ...props }) => {
  let dataMatrix = toMatrix(articles, cols, { fill: true });
  const isMobile = useMediaQuery(phone);
  return (
    <div className="BlogMultipleArticleCarouselWrapper blog-carousel">
      <div className="carouselWrapper-fixshadow">
        <CarouselResponsive
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={false}
          centerMode={isMobile}
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
