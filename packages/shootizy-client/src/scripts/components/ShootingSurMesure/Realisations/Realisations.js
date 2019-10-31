import React from "react";
import "./Realisations.scss";
import ThemesLister from "scripts/components/_common/ThemesLister/ThemesLister";

// TODO refacto ce truc moche et utiliser des multiples images
const themes = {
  Tous: "/assets/design/surmesure/realisations0.png",
  "Artisan, artiste, créateur": "/assets/design/surmesure/realisations1.png",
  "Agence de communication, d’événementiel": "/assets/design/surmesure/realisations2.png",
  "Entrepreneurs, entreprises": "/assets/design/surmesure/realisations3.png",
};

const themesArray = Object.keys(themes).map(key => ({ key: key, value: themes[key] }));
themesArray[0].selected = true;

const Realisations = props => {
  return <ThemesLister themesArray={themesArray} />;
};

Realisations.propTypes = {
  // bla: PropTypes.string,
};

Realisations.defaultProps = {
  // bla: 'test',
};

export default Realisations;
