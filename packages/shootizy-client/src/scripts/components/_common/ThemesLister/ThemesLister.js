import React, { useState, useEffect } from "react";
import "./ThemesLister.scss";
import Gallery from "../Gallery";

const ThemesLister = ({ themesArray }) => {
  const [currentTheme, setCurrentTheme] = useState(null);

  useEffect(() => {
    if (!themesArray) {
      setCurrentTheme(themesArray[0]);
    }
  }, [themesArray]);

  const changeImage = currentTheme => {
    themesArray.forEach(theme => (theme.selected = false));
    currentTheme.selected = true;
    setCurrentTheme(currentTheme);
  };

  return (
    <div className="ThemesListerWrapper">
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

        {currentTheme && (
          <div className="full-image">
            <Gallery images={currentTheme.value} />
            {/* <img src={`${currentTheme.value}`} alt="" /> */}
          </div>
        )}
      </div>
    </div>
  );
};

ThemesLister.propTypes = {
  // bla: PropTypes.string,
};

ThemesLister.defaultProps = {
  // bla: 'test',
};

export default ThemesLister;
