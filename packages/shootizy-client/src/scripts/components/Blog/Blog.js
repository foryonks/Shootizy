import React from "react";
import HeaderImage from "scripts/components/_common/HeaderImage";
import Layout from "scripts/pages/Layout";
import "./Blog.scss";
import List from "./List";

const Blog = props => {
  const title = `<strong>Bienvenue</strong>, Sur le Blog de<br>
   Shootizy !`;

  return (
    <Layout>
      <div className="BlogWrapper">
        <HeaderImage src="" preTitle="Blog" title={title} reverseColor={true} />
        <div className="container">
          <List />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
