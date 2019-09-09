import React from "react";
import HeaderImage from "scripts/components/_common/HeaderImage";
import Layout from "scripts/pages/Layout";
import "./Blog.scss";
import List from "./List";
import BlogCarousel from "./BlogCarousel";

const Blog = props => {
  const title = `<strong>Bienvenue</strong>, Sur le Blog de<br>
   Shootizy !`;

  return (
    <Layout>
      <div className="BlogWrapper">
        <HeaderImage src="" preTitle="Blog" title={title} reverseColor={true} />
        <BlogCarousel className="container-2" />
        <List />
      </div>
    </Layout>
  );
};

export default Blog;
