import React from "react";
import { toMatrix } from "../../../utils/utils";
import ThemeCard from "../ThemeCard";
import useRemoteContents from "scripts/hooks/useRemoteContents";

import "./Themes.scss";

const Themes = props => {
  const { contents } = useRemoteContents("/api/products?tags=theme");
  const dataGrid = contents && toMatrix(contents, 3, { fill: true });

  return (
    <div className="Themes container-2 grid">
      <h2 className="title">
        Choisissez le thème de votre shooting, <br />
        <strong>selon votre besoin !</strong>
      </h2>

      {dataGrid &&
        dataGrid.map((row, indexRow) => (
          <div className="row row-3" key={indexRow}>
            {row.map((theme, index) =>
              theme ? (
                <ThemeCard {...theme} key={theme.productId} />
              ) : (
                <div className="dummyCard" key={index} />
              )
            )}
          </div>
        ))}
    </div>
  );
};

export default Themes;
