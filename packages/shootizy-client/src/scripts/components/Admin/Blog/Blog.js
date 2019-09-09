import React from "react";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import ArticleCard from "scripts/components/Blog/ArticleCard";

const Blog = () => {
  let { contents: articles } = useRemoteContents("/api/blog/articles", {
    initialState: [],
    defaultUseCache: false,
  });
  if (!articles) return null;
  return (
    <div className="container ">
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
