import "./Blog.scss";
import "./Common.scss";

import React from "react";

import List from "./List";
import BlogCarousel from "./BlogCarousel";
import ListCategories from "./ListCategories";
import MostReadArticles from "./MostReadArticles/MostReadArticles";
import ListComments from "./ListComments";
import HeaderImage from "scripts/components/_common/HeaderImage";
import { Helmet } from "react-helmet";

const Blog = props => {
  const title = `<strong>Bienvenue</strong>, Sur le Blog de<br>
   Shootizy !`;

  return (
    <div className="BlogWrapper container-2">
      <Helmet bodyAttributes={{ class: "header-padding-page" }} />
      <HeaderImage preTitle="Blog" title={title} reverseColor={true} />

      <BlogCarousel className="" />
      <ListCategories />

      <main className="Blog-Content">
        <content>
          <h3 className="Blog-block-title">Articles</h3>
          <List cols={2} hidden={true} remoteContents="/api/blog/articles" />
        </content>
        <aside>
          <MostReadArticles />
          <ListComments sortBy="date" order="desc" count="3" />
        </aside>
      </main>
    </div>
  );
};

export default Blog;
