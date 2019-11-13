import React, { useState, useEffect } from "react";
import "./ThemesLister.scss";
import Gallery from "../Gallery";

const ThemesLister = ({ themesArray }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    if (themesArray && currentIndex === -1) {
      setCurrentIndex(0);
    }
    // eslint-disable-next-line
  }, [themesArray]);

  return (
    <div className="ThemesListerWrapper">
      <div className="txt-r themes-filter">
        <strong>Filtrer par thème :</strong>
        <ul className="themes-list">
          {themesArray.map((theme, index) => (
            <li key={theme.productId} className={`${currentIndex === index ? "current" : ""}`}>
              <button
                onClick={() => {
                  setCurrentIndex(index);
                }}>
                {theme.title}
              </button>
            </li>
          ))}
        </ul>

        {currentIndex !== -1 && (
          <div className="full-image">
            <Gallery images={themesArray[currentIndex].gallery} />
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
