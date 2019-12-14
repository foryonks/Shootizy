import React, { useContext } from "react";
import classNamesDedupe from "classnames/dedupe";

import { AppContext } from "scripts/contexts/App";
import "./ProductSelect.scss";

const ProductSelect = ({ currentId, onClick }) => {
  const { state: appState } = useContext(AppContext);
  const list = appState.themes || [];

  return (
    <div className="booking__product-select row row-3 row-wrap">
      {list.map(({ productId, title, image }) => (
        <div
          key={productId}
          className="ThemeCard card card-simple"
          onClick={() => onClick(productId, title)}>
          <div className="ThemeCard-image">
            <div className="img" style={{ backgroundImage: `url("${image}")` }} />
          </div>
          <div className="ThemeCard-content">
            <h4 className="ThemeCard-title">{title}</h4>
          </div>
          <div
            className={classNamesDedupe("ThemeCard-select-option", {
              "ThemeCard-select-option--active": currentId === productId,
            })}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductSelect;
