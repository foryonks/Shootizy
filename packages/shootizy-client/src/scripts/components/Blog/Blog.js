import React from "react";
import HeaderImage from "scripts/components/_common/HeaderImage";

import "./Blog.scss";
import List from "./List";

const Blog = props => {
  return (
    <div className="BlogWrapper">
      <HeaderImage src="" title="Blog Shootizy" />

      <div className="container">
        <h2 className="title">Articles</h2>
        <List />
      </div>
    </div>
  );
};

export default Blog;
