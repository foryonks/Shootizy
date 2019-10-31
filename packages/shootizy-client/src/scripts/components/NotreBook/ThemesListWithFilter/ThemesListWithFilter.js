import React, { useContext } from "react";
import { AppContext } from "scripts/contexts/App";
import ThemesLister from "scripts/components/_common/ThemesLister";
import "./ThemesListWithFilter.scss";

// TODO refacto ce truc moche et utiliser des multiples images
// const themes = {
//   Tous: "/assets/photos/themes/book-artiste/gallery.jpg",
//   "Artisan, artiste, créateur": "realisations1.png",
//   "Agence de communication, d’événementiel": "realisations2.png",
//   "Entrepreneurs, entreprises": "realisations3.png",
// };

// const themesArray = Object.keys(themes).map(key => ({ key: key, value: themes[key] }));
// themesArray[0].selected = true;

const ThemesListWithFilter = props => {
  const { state: appState } = useContext(AppContext);
  const list = appState.themes || [];
  const themesArray = list.map(({ title, gallery }) => ({ key: title, value: gallery }));
  themesArray[0].selected = true;

  return (
    <div className="ThemesListWithFilterWrapper">
      <ThemesLister themesArray={themesArray} />
    </div>
  );
};

export default ThemesListWithFilter;
