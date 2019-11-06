import React from "react";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";
import { toMatrix } from "scripts/utils/utils";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import BlogMultipleArticleCarousel from "../BlogMultipleArticleCarousel";
import "./BlogSmall.scss";

const BlogSmall = props => {
  let { contents: articles } = useRemoteContents("/api/blog/articles", { initialState: [] });
  if (!articles) return null;

  //let dataMatrix = toMatrix(articles, 3, { fill: true });

  return (
    <section className="BlogSmall section-background">
      <div className="BlogSmall-content">
        <h2 className="title">
          <strong>Le Blog de Shootizy</strong>
        </h2>
        <div className="description">
          Tendance, Mode, Look and Good Vibes autour de la photographie !
        </div>
        <div className="txt-c button">
          <a href="/blog" className="btn-white">
            Voir le Blog
          </a>
        </div>

        <BlogMultipleArticleCarousel articles={articles} cols={3} />
      </div>
    </section>
  );
};

export default BlogSmall;
