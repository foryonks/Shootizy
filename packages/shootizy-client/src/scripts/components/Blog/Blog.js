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
import NewsletterSubscribeSmall from "scripts/components/Newsletter/NewsletterSubscribeSmall";

import "./Blog.scss";
import "./Common.scss";
import CategoryBlock from "./CategoryBlock/CategoryBlock";

const Blog = props => {
  const title = `<strong>Bienvenue</strong>, Sur le Blog de<br>
   Shootizy !`;

  return (
    <div className="BlogWrapper page-section-grey">
      <Helmet bodyAttributes={{ class: "header-padding-page" }} />
      <Switch>
        <Route path="/blog/article/:slug" component={BlogArticle} />
        <Route path="/blog/category/:slug" component={BlogCategory} />
        <Route
          exact
          path="/blog"
          render={() => (
            <>
              <HeaderImage preTitle="Blog" title={title} reverseColor={true} useMask={false} />

              <div className="container-2">
                <BlogCarousel className="mask-grey" />
                <ListCategories />

                <main className="Blog-Content">
                  <content>
                    <CategoryBlock categorySlug="categorie1" cols={2} />
                    <CategoryBlock categorySlug="categorie2" cols={2} />
                  </content>
                  <aside>
                    <MostReadArticles />
                    <ListComments sortBy="date" order="desc" count="3" />
                    <NewsletterSubscribeSmall />
                  </aside>
                </main>
              </div>
            </>
          )}
        />
      </Switch>
    </div>
  );
};

export default Blog;
