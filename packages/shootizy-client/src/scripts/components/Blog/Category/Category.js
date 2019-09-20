import React from "react";
import "./Category.scss";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import HeaderImage from "scripts/components/_common/HeaderImage";
import List from "../List";

import ListRenderedSimple from "../List/ListRendererSimple";

const Category = ({ match }) => {
  const { contents: category } = useRemoteContents(`/api/blog/category/${match.params.slug}`);
  if (!category) return null;
  const title = `<strong>${category.name}</strong>`;

  return (
    <div className="CategoryWrapper container-2">
      <HeaderImage src="" preTitle="Blog" title={title} reverseColor={true} />

      <main className="Blog-Content">
        <content>
          <h3 className="Blog-block-title">Articles</h3>
          <List cols={2} hidden={true} items={category.articles} />
        </content>
        <aside>
          <h3 className="Blog-block-title">Derniers articles</h3>
          <List sortBy="date" limit="3" render={ListRenderedSimple} items={category.articles} />
        </aside>
      </main>
    </div>
  );
};

Category.propTypes = {
  // bla: PropTypes.string,
};

Category.defaultProps = {
  // bla: 'test',
};

export default Category;
