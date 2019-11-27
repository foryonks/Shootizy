import React from "react";
import { element, func, oneOfType } from "prop-types";
import List from "../List";
import ListRenderedSimple from "../List/ListRendererSimple";
import "./GenericArticleList.scss";

const GenericArticleList = props => (
  <div className="MostReadArticlesWrapper">
    <h3 className="Blog-block-title">{props.title}</h3>
    <List {...props} />
  </div>
);

GenericArticleList.propTypes = {
  render: oneOfType([element, func]),
};

GenericArticleList.defaultProps = {
  render: ListRenderedSimple,
};

export default GenericArticleList;
