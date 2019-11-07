import React, { useContext } from "react";

import { AppContext } from "scripts/contexts/App";
import ThemeCard from "../ThemeCard";

import "./Themes.scss";

const Themes = () => {
  const { state: appState } = useContext(AppContext);

  const list = appState.themes || []; //.map(({ gallery }) => gallery);

  return (
    <div className="Themes container-2 grid">
      <h2 className="title">
        Choisissez <strong>le thème</strong> de votre shooting,
        <br />
        <strong>selon votre besoin ou votre envie</strong>.
      </h2>

      {/* <p className="undertitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p> */}

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
