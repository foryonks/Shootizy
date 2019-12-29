import React from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import BlogCarousel from "./BlogCarousel";

import GenericArticleList from "./GenericArticleList";
import ListComments from "./ListComments";
import HeaderImage from "scripts/components/_common/HeaderImage";
import BlogArticle from "scripts/components/Blog/Article";
import BlogCategory from "scripts/components/Blog/Category";
import NewsletterSubscribeSmall from "scripts/components/Newsletter/NewsletterSubscribeSmall";
import ListCategoryAndSearch from "./ListCategoryAndSearch";
import "./Blog.scss";
import "./Common.scss";
import CategoryBlock from "./CategoryBlock/CategoryBlock";
import BlockInstagram from "./BlockInstagram";
import useMediaQuery, { phone } from "scripts/hooks/useMediaQuery";

const Blog = props => {
  const title = `<strong>Bienvenue</strong>, Sur le Blog de<br> Shootizy !`;

  const isMobile = useMediaQuery(phone);

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

              <div className="container-2 blog-container section-paddings">
                <BlogCarousel className="mask-grey" />
                <ListCategoryAndSearch />
                <main className="Blog-Content">
                  <content>
                    <CategoryBlock categorySlug="categorie1" cols={isMobile ? 1 : 2} />
                    <CategoryBlock categorySlug="categorie2" cols={isMobile ? 1 : 3} />
                  </content>
                  <aside>
                    <GenericArticleList
                      title="Derniers articles"
                      sortBy="date"
                      limit={3}
                      remoteContentsUrl="/api/blog/articles"
                    />
                    <ListComments
                      className="listComments-blog"
                      sortBy="date"
                      order="desc"
                      count="3"
                    />
                    <NewsletterSubscribeSmall />
                  </aside>
                </main>
                <main className="Blog-Content">
                  <content>
                    <div className="row row-2">
                      <div className="col">
                        <GenericArticleList
                          className="generic-article-list-big"
                          title="Actualité"
                          sortBy="date"
                          direction={-1}
                          limit={4}
                          remoteContentsUrl="/api/blog/category/actualite/articles"
                        />
                      </div>
                      <div className="col">
                        <GenericArticleList
                          className="generic-article-list-big"
                          title="Les plus lus"
                          sortBy="readCount"
                          direction={-1}
                          limit={4}
                          remoteContentsUrl="/api/blog/category/actualite/articles"
                        />
                      </div>
                    </div>
                  </content>
                  <aside>
                    <BlockInstagram />
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
