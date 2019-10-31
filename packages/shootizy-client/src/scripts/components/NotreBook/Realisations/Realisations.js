import React from "react";
import "./Realisations.scss";
import ThemeLister from "scripts/components/_common/ThemesLister/ThemesLister";

// TODO refacto ce truc moche et utiliser des multiples images
const themes = {
  Tous: "realisations0.png",
  "Artisan, artiste, créateur": "realisations1.png",
  "Agence de communication, d’événementiel": "realisations2.png",
  "Entrepreneurs, entreprises": "realisations3.png",
};

const themesArray = Object.keys(themes).map(key => ({ key: key, value: themes[key] }));
themesArray[0].selected = true;

const Realisations = props => {
  return <ThemeLister themesArray={themesArray} />;
};

Realisations.propTypes = {
  // bla: PropTypes.string,
};

Realisations.defaultProps = {
  // bla: 'test',
};

export default Realisations;
