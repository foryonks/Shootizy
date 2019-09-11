import "./Blog.scss";
import "./Common.scss";

import React from "react";
import HeaderImage from "scripts/components/_common/HeaderImage";
import Layout from "scripts/pages/Layout";
import List from "./List";
import BlogCarousel from "./BlogCarousel";
import ListCategories from "./ListCategories";
import ListRenderedSimple from "./List/ListRendererSimple";

const Blog = props => {
  const title = `<strong>Bienvenue</strong>, Sur le Blog de<br>
   Shootizy !`;

  return (
    <Layout>
      <div className="BlogWrapper container-2">
        <HeaderImage src="" preTitle="Blog" title={title} reverseColor={true} />
        <BlogCarousel className="" />
        <ListCategories />

        <main className="Blog-Content">
          <content>
            <h3 className="Blog-block-title">Articles</h3>
            <List cols={2} hidden={true} remoteContents="/api/blog/articles" />
          </content>
          <aside>
            <h3 className="Blog-block-title">Derniers articles</h3>
            <List
              sortBy="date"
              limit="3"
              render={ListRenderedSimple}
              remoteContents="/api/blog/articles"
            />
          </aside>
        </main>
      </div>
    </Layout>
  );
};

export default Blog;
