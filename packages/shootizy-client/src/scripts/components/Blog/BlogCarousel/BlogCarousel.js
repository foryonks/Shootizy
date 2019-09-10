import React from "react";
import useRemoteContents from "scripts/hooks/useRemoteContents";
//import ArticleCard from "../ArticleCard";
import Carousel from "scripts/components/_common/Carousel";
import CarouselRenderer from "./CarouselRenderer";
import "./BlogCarousel.scss";

const BlogCarousel = ({ className }) => {
  let { contents: articles } = useRemoteContents("/api/blog/articles", { initialState: [] });
  if (!articles) return null;

  //let dataMatrix = toMatrix(articles, 2, { fill: true });

  return (
    <section className={`BlogCarousel ${className}`}>
      <Carousel items={articles} render={CarouselRenderer} />
    </section>
  );
};

BlogCarousel.propTypes = {
  // bla: PropTypes.string,
};

BlogCarousel.defaultProps = {
  // bla: 'test',
};

export default BlogCarousel;
