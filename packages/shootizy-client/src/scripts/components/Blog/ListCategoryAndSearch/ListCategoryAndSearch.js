import React from "react";
//import PropTypes from "prop-types";
import Search from "../Search";
import ListCategories from "../ListCategories";
import "./ListCategoryAndSearch.scss";

const ListCategoryAndSearch = props => (
  <div className="categories-and-search">
    <ListCategories />
    <Search />
  </div>
);

ListCategoryAndSearch.propTypes = {
  // bla: PropTypes.string,
};

ListCategoryAndSearch.defaultProps = {
  // bla: 'test',
};

export default ListCategoryAndSearch;
