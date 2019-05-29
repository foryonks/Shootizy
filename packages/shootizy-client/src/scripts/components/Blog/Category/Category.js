import React from "react";
import "./Category.scss";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import HeaderImage from "scripts/components/_common/HeaderImage";
import List from "../List";

const Category = ({ match }) => {
  const { contents: category } = useRemoteContents(`/api/blog/category/${match.params.slug}`);
  if (!category) return null;
  return (
    <div className="CategoryWrapper">
      <HeaderImage src="" title="" />

      <h2 className="title">{category.name}</h2>
      <List items={category.articles} />
    </div>
  );
};

Category.propTypes = {
  // bla: PropTypes.string,
};

Category.defaultProps = {
  // bla: 'test',
};

export default Category;
