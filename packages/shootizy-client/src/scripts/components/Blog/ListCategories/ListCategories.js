import React from "react";
//import PropTypes from "prop-types";
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
            <a href={`/blog/category/${slug}`}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCategories;
