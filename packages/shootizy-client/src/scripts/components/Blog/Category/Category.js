import React from "react";

import useRemoteContents from "scripts/hooks/useRemoteContents";
import HeaderImage from "scripts/components/_common/HeaderImage";
import List from "../List";
import CrumbRoute from "scripts/components/Breadcrumbs/CrumbRoute";

import ListCategories from "../ListCategories";
import MostReadArticles from "../MostReadArticles";
import ListComments from "../ListComments";
import NewsletterSubscribeSmall from "scripts/components/Newsletter/NewsletterSubscribeSmall";

import "./Category.scss";

const Category = ({ match }) => {
  const { contents: category } = useRemoteContents(`/api/blog/category/${match.params.slug}`);
  if (!category) return null;

  return (
    <CrumbRoute
      title={category.name}
      path="/blog/category/:slug"
      render={() => (
        <div className="CategoryWrapper container-2">
          <HeaderImage
            src=""
            preTitle="Blog"
            title={`<strong>${category.name}</strong>`}
            reverseColor={true}
            useMask={false}
          />

          <div className="container-2">
            <ListCategories />

            <main className="Blog-Content">
              <content>
                <List
                  cols={2}
                  hidden={true}
                  remoteContentsUrl={`/api/blog/category/${match.params.slug}/articles`}
                />
              </content>
              <aside>
                <MostReadArticles />
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
