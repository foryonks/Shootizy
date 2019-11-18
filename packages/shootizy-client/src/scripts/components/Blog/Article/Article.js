import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import Interweave from "interweave";
import { blog } from "scripts/utils/routesManager";
import HeaderImage from "scripts/components/_common/HeaderImage";
import NewsletterSubscribeSmall from "scripts/components/Newsletter/NewsletterSubscribeSmall";
import { Helmet } from "react-helmet";
import GenericArticleList from "../GenericArticleList";
import { formatDateStd } from "scripts/utils/DateUtils";
import ArticleComments from "./ArticleComments/ArticleComments";
import CrumbRoute from "scripts/components/Breadcrumbs/CrumbRoute";
import { fetchJson } from "scripts/utils/api";

import "./Article.scss";

const ARTICLE_TIMER_COUNT = 1000 * 60;

const Article = ({ match }) => {
  const { contents: article } = useRemoteContents(`/api/blog/article/${match.params.slug}`);
  useEffect(() => {
    const articleCountTimer = setTimeout(function() {
      if (article) {
        fetchJson(`/api/blog/article-read-count/${match.params.slug}`);
      }
    }, ARTICLE_TIMER_COUNT);
    return () => {
      clearTimeout(articleCountTimer);
    };
  });

  if (!article) return <div className="Article container-2">Article Introuvable</div>;
  const { title, text, category, imageLarge } = article;

  return (
    <CrumbRoute
      title={title}
      path="/blog/article/:slug"
      render={() => (
        <div className="Article">
          <Helmet bodyAttributes={{ class: "header-padding-page" }} />
          <HeaderImage preTitle="Blog" title={title} reverseColor={true} useMask={false} />
          <div className="container-2">
            <div className="article-image" style={{ backgroundImage: `url('${imageLarge}')` }}>
              <div className="article-header">
                <div className="blog-cat-datetime">
                  <Link className="content-theme" to={blog.categoryUrl(category.slug)}>
                    {category.name}
                  </Link>
                  {" / "}
                  <span className="content-date">{formatDateStd(article.date)}</span>
                </div>
                <h2 className="title">{title}</h2>
              </div>
            </div>

            <main className="Blog-Content">
              <content>
                <div className="article-content">
                  <div className="rte-content">
                    <Interweave content={text} />
                  </div>
                </div>
              </content>
              <aside>
                <GenericArticleList
                  title="Derniers articles"
                  sortBy="date"
                  limit={3}
                  remoteContentsUrl="/api/blog/articles"
                />
                <NewsletterSubscribeSmall />
              </aside>
            </main>
          </div>
          <div className="page-section page-section-white">
            <ArticleComments articleId={article.articleId} />
          </div>
        </div>
      )}
    />
  );
};

Article.propTypes = {
  // bla: PropTypes.string,
};

Article.defaultProps = {
  // bla: 'test',
};

export default Article;
