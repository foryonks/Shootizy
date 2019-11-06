import React from "react";
import { array, number } from "prop-types";
import "./CategoryBlock.scss";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import BlogMultipleArticleCarousel from "../BlogMultipleArticleCarousel/BlogMultipleArticleCarousel";

const CategoryBlock = ({ categorySlug, cols }) => {
  const categoryArticles =
    useRemoteContents(`/api/blog/category/${categorySlug}/articles`).contents || [];
  const category = useRemoteContents(`/api/blog/category/${categorySlug}`).contents || {};

  return (
    <div className="CategoryBlockWrapper">
      <h3 className="Blog-block-title">{category.name}</h3>
      <BlogMultipleArticleCarousel articles={categoryArticles} cols={cols} />
    </div>
  );
};

CategoryBlock.propTypes = {
  categorySlug: array,
  cols: number,
};

CategoryBlock.defaultProps = {
  categorySlug: [],
  cols: 2,
};

export default CategoryBlock;
