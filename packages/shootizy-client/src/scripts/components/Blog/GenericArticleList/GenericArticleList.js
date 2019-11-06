import React from "react";
import { element } from "prop-types";
import List from "../List";
import ListRenderedSimple from "../List/ListRendererSimple";

//import { Test } from './MostReadArticles.styles';

const MostReadArticles = props => (
  <div className="MostReadArticlesWrapper">
    <h3 className="Blog-block-title">{props.title}</h3>
    <List {...props} />
  </div>
);

MostReadArticles.propTypes = {
  render: element,
};

MostReadArticles.defaultProps = {
  render: ListRenderedSimple,
};

export default MostReadArticles;
