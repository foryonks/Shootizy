import React from "react";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import ArticleCard from "scripts/components/Blog/ArticleCard";
import { Link } from "react-router-dom";

const Blog = () => {
  let { contents: articles } = useRemoteContents("/api/blog/articles", {
    initialState: [],
    defaultUseCache: false,
  });
  if (!articles) return null;
  return (
    <div className="container ">
      <div className="txt-c">
        <Link to="/admin/blog/categories" className="btn-green">
          Gérer les categories
        </Link>{" "}
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
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
