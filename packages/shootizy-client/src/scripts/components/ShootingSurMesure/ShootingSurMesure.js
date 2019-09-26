import React from "react";
import "./ShootingSurMesure.scss";
import Themes from "../Home/Themes/Themes";
import HeaderImage from "scripts/components/_common/HeaderImage";
import { Helmet } from "react-helmet";

const ShootingStudio = props => (
  <div className="ShootingSurMesure page-container">
    <Helmet bodyAttributes={{ class: "header-padding-page" }} />
    <HeaderImage
      className="header-image-generic"
      src="/assets/design/headers/header-shooting-studio.png"
      preTitle="Shooting sur mesure"
      title="Décrivez-nous votre besoin <br>et obtenez un <strong>devis gratuit</strong> sur mesure !"
    />

    <div className="main container-2">
      <h2 className="title">
        Shooting Sur Mesure <br />
        PAGE A FAIRE !!!
      </h2>
    </div>
    <div className="page-section section-container">
      <Themes />
    </div>
  </div>
);

export default ShootingStudio;
