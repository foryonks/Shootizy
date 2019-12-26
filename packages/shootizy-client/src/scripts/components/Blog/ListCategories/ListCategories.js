import React from "react";
//import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import useRemoteContents from "scripts/hooks/useRemoteContents";
import "./ListCategories.scss";
import useMediaQuery, { phone } from "scripts/hooks/useMediaQuery";
import ArrowLeft from "scripts/components/_common/Icons/ArrowLeft";

const ListCategories = ({ history }) => {
  let { contents: categories } = useRemoteContents("/api/blog/categories", { initialState: [] });
  categories = categories || [];

  const isMobile = useMediaQuery(phone);

  return (
    <div className="ListCategoriesWrapper">
      {isMobile ? (
        <span className="mobile-select">
          <span>{(categories[0] || {}).name || "Filtrer"}</span>
          <ArrowLeft className="icon-select" />

          <select
            placeholder="Filtrer"
            onChange={e => {
              history.replace(e.currentTarget.value);
            }}>
            {categories.map(({ _id, slug, name }) => (
              <option key={_id} value={`/blog/category/${slug}`}>
                {name}
              </option>
            ))}
          </select>
        </span>
      ) : (
        <ul>
          {categories.map(({ _id, slug, name }) => (
            <li key={_id}>
              <NavLink to={`/blog/category/${slug}`} className="btn-very-small">
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default withRouter(ListCategories);
