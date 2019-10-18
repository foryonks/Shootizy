import React, { useState } from "react";
import "./Realisations.scss";

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
  const [currentTheme, setCurrentTheme] = useState(themesArray[0]);

  const changeImage = currentTheme => {
    themesArray.forEach(theme => (theme.selected = false));
    currentTheme.selected = true;
    setCurrentTheme(currentTheme);
  };

  return (
    <div className="RealisationsWrapper">
      <div className="txt-r themes-filter">
        <strong>Filtrer par thème :</strong>
        <ul className="themes-list">
          {themesArray.map(theme => (
            <li key={theme.key} className={`${theme.selected ? "current" : ""}`}>
              <button
                onClick={() => {
                  changeImage(theme);
                }}>
                {theme.key}
              </button>
            </li>
          ))}
        </ul>

        <div className="full-image">
          <img src={`/assets/design/surmesure/${currentTheme.value}`} alt="" />
        </div>
      </div>
    </div>
  );
};

Realisations.propTypes = {
  // bla: PropTypes.string,
};

Realisations.defaultProps = {
  // bla: 'test',
};

export default Realisations;
