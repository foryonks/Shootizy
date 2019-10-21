import React from "react";
//import PropTypes from "prop-types";
import List from "../List";
import ListRenderedSimple from "../List/ListRendererSimple";

//import { Test } from './MostReadArticles.styles';

const MostReadArticles = props => (
  <div className="MostReadArticlesWrapper">
    <h3 className="Blog-block-title">Derniers articles</h3>
    <List
      sortBy="date"
      limit="3"
      render={ListRenderedSimple}
      remoteContentsUrl="/api/blog/articles"
    />
  </div>
);

MostReadArticles.propTypes = {
  // bla: PropTypes.string,
};

MostReadArticles.defaultProps = {
  // bla: 'test',
};

export default MostReadArticles;
