import React from "react";

import useRemoteContents from "scripts/hooks/useRemoteContents";
import List from "../List";
import CrumbRoute from "scripts/components/Breadcrumbs/CrumbRoute";

import ListCategories from "../ListCategories";
import GenericArticleList from "../GenericArticleList";
import ListComments from "../ListComments";
import NewsletterSubscribeSmall from "scripts/components/Newsletter/NewsletterSubscribeSmall";
import usePagination from "scripts/hooks/usePagination";
import "./Category.scss";

const ITEMS_PER_PAGE = 10;

const Category = ({ match }) => {
  const { contents: category } = useRemoteContents(`/api/blog/category/${match.params.slug}`);
  const { contents: articles } = useRemoteContents(
    `/api/blog/category/${match.params.slug}/articles`
  );
  const { getCurrentPage, PaginationComponent } = usePagination(articles || [], ITEMS_PER_PAGE);
  if (!category) return null;

  return (
    <CrumbRoute
      title={category.name}
      path="/blog/category/:slug"
      render={() => (
        <div className="CategoryWrapper container-2">
          <div>
            <ListCategories />

            <main className="Blog-Content mt50">
              <content>
                <h2 className="title txt-l mb50">
                  <strong>{category.name}</strong>
                </h2>
                <List cols={2} hidden={true} items={getCurrentPage()} />
                {PaginationComponent}
              </content>
              <aside>
                <GenericArticleList
                  title="Derniers articles"
                  sortBy="date"
                  limit={3}
                  remoteContentsUrl="/api/blog/articles"
                />
                <ListComments sortBy="date" order="desc" count="3" />
                <NewsletterSubscribeSmall />
              </aside>
            </main>
          </div>
        </div>
      )}
    />
  );
};

Category.propTypes = {
  // bla: PropTypes.string,
};

Category.defaultProps = {
  // bla: 'test',
};

export default Category;
