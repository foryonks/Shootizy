import React from "react";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";
import "./BlogSmall.scss";
import Icon from "../../Icon";
import { toMatrix } from "../../../utils/utils";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import ArticleCard from "../ArticleCard";

const BlogSmall = props => {
  let { contents: articles } = useRemoteContents("/api/blog/articles", { initialiState: [] });
  if (!articles) return null;

  let dataMatrix = toMatrix(articles, 3, { fill: true });

  return (
    <section className="BlogSmall section-background">
      <div className="">
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

        <div className="blog-carousel">
          <CarouselResponsive
            infiniteLoop
            showThumbs={false}
            showIndicators={false}
            showStatus={false}>
            {dataMatrix.map((row, index) => (
              <div className="slideRow container-2" key={index}>
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
        {/* <p className="button-container-centered">
          <button className="btn-green btn-small">
            <Icon name="triangle-right" />
            &nbsp;Découvrir le blog
          </button>
        </p> */}
      </div>
    </section>
  );
};

BlogSmall.propTypes = {
  // bla: PropTypes.string,
};

BlogSmall.defaultProps = {
  // bla: 'test',
};

export default BlogSmall;
