import React from "react";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import BlogMultipleArticleCarousel from "../BlogMultipleArticleCarousel";
import "./BlogSmall.scss";
import useMediaQuery, { phone } from "scripts/hooks/useMediaQuery";

const BlogSmall = props => {
  let { contents: articles } = useRemoteContents("/api/blog/articles", { initialState: [] });
  const isMobile = useMediaQuery(phone);
  const columns = isMobile ? 1 : 3;
  if (!articles) return null;

  return (
    <section className="BlogSmall section-background section-paddings">
      <div className="BlogSmall-content">
        <h2 className="title">
          <strong>Le Blog de Shootizy</strong>
        </h2>
        <div className="description">
          Tendance, Mode, Look and Good Vibes autour de la photographie !
        </div>
        {isMobile ? null : (
          <div className="txt-c button">
            <a href="/blog" className="btn-white">
              Voir le Blog
            </a>
          </div>
        )}

        <BlogMultipleArticleCarousel articles={articles} cols={columns} centerMode={isMobile} />
        {isMobile ? (
          <div className="txt-c button">
            <a href="/blog" className="btn-white">
              Voir le Blog
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default BlogSmall;
