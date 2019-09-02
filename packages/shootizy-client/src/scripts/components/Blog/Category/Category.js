import React from "react";
import "./Category.scss";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import HeaderImage from "scripts/components/_common/HeaderImage";
import List from "../List";
import Layout from "scripts/pages/Layout";

const Category = ({ match }) => {
  const { contents: category } = useRemoteContents(`/api/blog/category/${match.params.slug}`);
  if (!category) return null;
  return (
    <Layout>
      <div className="CategoryWrapper">
        <HeaderImage src="" title="" />

        <h2 className="title">{category.name}</h2>
        <List items={category.articles} />
      </div>
    </Layout>
  );
};

Category.propTypes = {
  // bla: PropTypes.string,
};

Category.defaultProps = {
  // bla: 'test',
};

export default Category;
