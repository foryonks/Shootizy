import React from "react";
import HeaderImage from "scripts/components/_common/HeaderImage";
import Layout from "scripts/pages/Layout";
import "./Blog.scss";
import List from "./List";

const Blog = props => {
  return (
    <Layout>
      <div className="BlogWrapper">
        <HeaderImage src="" preTitle="Blog" title="Articles" />
        <h2 className="title">Articles</h2>
        <div className="container">
          <h2 className="title">Articles</h2>
          <List />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
