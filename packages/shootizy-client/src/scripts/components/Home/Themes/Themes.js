import React, { useContext } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { AppContext } from "scripts/contexts/App";
import ThemeCard from "../ThemeCard";

import "./Themes.scss";

const Themes = ({ location, locationHideRegex }) => {
  const { state: appState } = useContext(AppContext);
  if (location.pathname.match(locationHideRegex)) {
    return null;
  }

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
Themes.propTypes = {
  locationHideRegex: PropTypes.any,
};

Themes.defaultProps = {
  locationHideRegex: new RegExp(/^$/),
};

export default withRouter(Themes);
