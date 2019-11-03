import React from "react";
import "./Realisations.scss";
import ThemesLister from "scripts/components/_common/ThemesLister";
import Gallery from "scripts/components/_common/Gallery";
const { fakegallery } = Gallery;

// TODO refacto ce truc moche et utiliser des multiples images
const themes = {
  Tous: fakegallery(6),
  "Artisan, artiste, créateur": fakegallery(6),
  "Agence de communication, d’événementiel": fakegallery(6),
  "Entrepreneurs, entreprises": fakegallery(6),
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
