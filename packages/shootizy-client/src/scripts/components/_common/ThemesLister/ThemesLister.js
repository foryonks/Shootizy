import React, { useState } from "react";
import "./ThemesLister.scss";
import Gallery from "../Gallery";
import useMediaQuery, { phone } from "scripts/hooks/useMediaQuery";
import ArrowLeft from "../Icons/ArrowLeft";

const ThemesLister = ({ themesArray }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery(phone);
  return (
    <div className="ThemesListerWrapper">
      <div className="txt-r themes-filter">
        {isMobile ? (
          <span className="mobile-select">
            <span>{(themesArray[currentIndex] || {}).title || "Filtrer"}</span>
            <ArrowLeft className="icon-select" />

            <select
              placeholder="Filtrer"
              onChange={e => {
                setCurrentIndex(parseInt(e.currentTarget.value));
              }}>
              {themesArray.map((theme, index) => (
                <option key={theme.productId} value={index}>
                  {theme.title}
                </option>
              ))}
            </select>
          </span>
        ) : (
          <>
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
          </>
        )}

        <Gallery images={themesArray[currentIndex].gallery} />
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
