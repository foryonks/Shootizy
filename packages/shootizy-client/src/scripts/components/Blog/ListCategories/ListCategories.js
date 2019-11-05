import React from "react";
//import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import useRemoteContents from "scripts/hooks/useRemoteContents";
import "./ListCategories.scss";

const ListCategories = props => {
  let { contents: categories } = useRemoteContents("/api/blog/categories", { initialState: [] });
  categories = categories || [];

  return (
    <div className="ListCategoriesWrapper">
      <ul>
        {categories.map(({ _id, slug, name }) => (
          <li key={_id}>
            <NavLink to={`/blog/category/${slug}`}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCategories;
