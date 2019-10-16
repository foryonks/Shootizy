import React, { useState } from "react";
import "./ShootingSurMesure.scss";
//import Themes from "../Home/Themes/Themes";
import HeaderImage from "scripts/components/_common/HeaderImage";
import { Helmet } from "react-helmet";
import SurMesure from "./SurMesure";
import { Link } from "react-router-dom";

// TODO refacto ce truc moche et utiliser des multiples images
const themes = {
  Tous: "realisations0.png",
  "Artisan, artiste, créateur": "realisations1.png",
  "Agence de communication, d’événementiel": "realisations2.png",
  "Entrepreneurs, entreprises": "realisations3.png",
};

const themesArray = Object.keys(themes).map(key => ({ key: key, value: themes[key] }));
themesArray[0].selected = true;

const ShootingStudio = props => {
  const [currentTheme, setCurrentTheme] = useState(themesArray[0]);

  const changeImage = currentTheme => {
    themesArray.forEach(theme => (theme.selected = false));
    currentTheme.selected = true;
    setCurrentTheme(currentTheme);
  };

  return (
    <div className="ShootingSurMesureWrapper page-container">
      <Helmet bodyAttributes={{ class: "header-padding-page" }} />
      <HeaderImage
        className="header-image-generic"
        src="/assets/design/headers/header-shooting-studio.png"
        preTitle="Shooting sur mesure"
        title="Décrivez-nous votre besoin <br>et obtenez un <strong>devis gratuit</strong> sur mesure !"
      />
      <SurMesure fullForm={true} />
      <div className="container-2">
        <div className="mea-table">
          <div className="mea-desc">
            <div>
              <strong className="grey-text">Sur mesure</strong>
            </div>
            <h2 className="title">Artisan, artiste, créateur…</h2>
            <p className="grey-text">
              Vous voulez valoriser vos créations grâce à des prises de vues haute qualité, à prix
              optimisé.
            </p>
            <p className="button">
              <Link to="/exprimer" className="btn-green">
                Exprimez votre besoin
              </Link>
            </p>
          </div>
          <div className="mea-img">
            <img src="/assets/design/surmesure/img1.png" alt="" />
          </div>
        </div>
        <div className="mea-table">
          <div className="mea-img">
            <img src="/assets/design/surmesure/img2.png" alt="" />
          </div>
          <div className="mea-desc">
            <div>
              <strong className="grey-text">Sur mesure</strong>
            </div>
            <h2 className="title">Agence de communication, d’événementiel …</h2>
            <p className="grey-text">
              Vous cherchez le meilleur rapport qualité-prix-implication pour vos visuels :
              automobile alimentaire, gastronomie, hôtellerie, luxe, sport, voyages…
            </p>
            <p className="button">
              <Link to="/exprimer" className="btn-green">
                Exprimez votre besoin
              </Link>
            </p>
          </div>
        </div>
        <div className="mea-table">
          <div className="mea-desc">
            <div>
              <strong className="grey-text">Sur mesure</strong>
            </div>
            <h2 className="title">Agence de communication, d’événementiel …</h2>
            <p className="grey-text">
              Vous cherchez le meilleur rapport qualité-prix-implication pour vos visuels :
              automobile alimentaire, gastronomie, hôtellerie, luxe, sport, voyages…
            </p>
            <p className="button">
              <Link to="/exprimer" className="btn-green">
                Exprimez votre besoin
              </Link>
            </p>
          </div>
          <div className="mea-img">
            <img src="/assets/design/surmesure/img3.png" alt="" />
          </div>
        </div>
      </div>

      <div className="container-2">
        <h2 className="title mt100 mb50">Quelques unes de nos réalisations</h2>
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

        <div className="clients mt100">
          <div>
            <strong className="grey-text">Clients</strong>
          </div>
          <h2 className="title txt-l">Ils nous font confiance…</h2>

          <div className="full-image enterprises-confiance">
            <img src="/assets/design/surmesure/entreprises.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShootingStudio;
