import React from "react";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import ArticleCard from "scripts/components/Blog/ArticleCard";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  let { contents: articles } = useRemoteContents("/api/blog/articles", {
    initialState: [],
    defaultUseCache: false,
  });
  if (!articles) return null;
  return (
    <div>
      <div className="txt-c">
        <Link to="/admin/blog/article" className="btn-green">
          Ajouter un article
        </Link>
      </div>
      <div className="blog-list row row-3 row-stretch row-margin row-wrap">
        {articles.map(article => (
          <ArticleCard
            article={article}
            key={article.articleId}
            getArticleUrl={({ slug }) => `/admin/blog/article/${slug}`}
            showDesc={false}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
