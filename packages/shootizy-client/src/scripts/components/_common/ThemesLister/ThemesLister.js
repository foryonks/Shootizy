import React, { useState } from "react";
import "./ThemesLister.scss";
import Gallery from "../Gallery";

const ThemesLister = ({ themesArray }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
        <div className="full-image">
          <Gallery images={themesArray[currentIndex].gallery} />
        </div>
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
