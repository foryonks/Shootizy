import React from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import List from "./List";
import BlogCarousel from "./BlogCarousel";
import ListCategories from "./ListCategories";
import MostReadArticles from "./MostReadArticles/MostReadArticles";
import ListComments from "./ListComments";
import HeaderImage from "scripts/components/_common/HeaderImage";
import BlogArticle from "scripts/components/Blog/Article";
import BlogCategory from "scripts/components/Blog/Category";

import "./Blog.scss";
import "./Common.scss";

const Blog = props => {
  const title = `<strong>Bienvenue</strong>, Sur le Blog de<br>
   Shootizy !`;

  return (
    <div className="BlogWrapper container-2">
      <Helmet bodyAttributes={{ class: "header-padding-page" }} />
      <Switch>
        <Route path="/blog/article/:slug" component={BlogArticle} />
        <Route path="/blog/category/:slug" component={BlogCategory} />
        <Route
          exact
          path="/blog"
          render={() => (
            <>
              <HeaderImage preTitle="Blog" title={title} reverseColor={true} />

              <BlogCarousel className="" />
              <ListCategories />

              <main className="Blog-Content">
                <content>
                  <h3 className="Blog-block-title">Articles</h3>
                  <List cols={2} hidden={true} remoteContentsUrl="/api/blog/articles" />
                </content>
                <aside>
                  <MostReadArticles />
                  <ListComments sortBy="date" order="desc" count="3" />
                </aside>
              </main>
            </>
          )}
        />
      </Switch>
    </div>
  );
};

export default Blog;
