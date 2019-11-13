import React from "react";
import { string, number } from "prop-types";
import "./CategoryBlock.scss";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import BlogMultipleArticleCarousel from "../BlogMultipleArticleCarousel/BlogMultipleArticleCarousel";

const CategoryBlock = ({ categorySlug, cols, className }) => {
  const categoryArticles =
    useRemoteContents(`/api/blog/category/${categorySlug}/articles`).contents || [];
  const category = useRemoteContents(`/api/blog/category/${categorySlug}`).contents || {};

  return (
    <div className={`CategoryBlockWrapper ${className}`}>
      <h3 className="Blog-block-title">{category.name}</h3>
      <BlogMultipleArticleCarousel articles={categoryArticles} cols={cols} />
    </div>
  );
};

CategoryBlock.propTypes = {
  categorySlug: string,
  cols: number,
};

CategoryBlock.defaultProps = {
  categorySlug: "",
  cols: 2,
};

export default CategoryBlock;
