import React, { useContext } from "react";

import { AppContext } from "scripts/contexts/App";
import ThemeCard from "../ThemeCard";

import "./Themes.scss";

const Themes = () => {
  const { state: appState } = useContext(AppContext);

  const list = appState.themes || [];

  return (
    <div className="Themes container-2 grid">
      <h2 className="title">
        Choisissez le thème de votre shooting, <br />
        <strong>selon votre besoin !</strong>
      </h2>

      <div className="row row-3 row-wrap">
        {list.map((theme, index) =>
          theme ? (
            <ThemeCard {...theme} key={theme.productId} />
          ) : (
            <div className="dummyCard" key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default Themes;
