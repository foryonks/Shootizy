import React from "react";
import "./ShootingStudio.scss";
import HeaderImage from "scripts/components/_common/HeaderImage";
import Themes from "../Home/Themes/Themes";
import { Link } from "react-router-dom";

const ShootingStudio = props => (
  <div className="ShootingStudioPage">
    <HeaderImage
      //src={imageLarge}
      //preTitle="Shooting Studio"
      title="Shooting Studio"
      //buttonLink={bookingLink}
      //buttonText="Je réserve mon Shooting">
      //<Prices className="Prices-header-product" textKey="product"
    />

    <div className="main container-2">
      <h2 className="title">Shooting studio </h2>
      <div className="desc">
        Nous immortalisons toutes vos thématiques et vous mettons en scène{" "}
      </div>

      <div className="mea">
        <div className="mea-img">
          <img src="" alt="" />
        </div>
        <div className="mea-desc">
          lorem ipsum dolor sit omet, consectetur odipisicing elit, sed do eiusmod tempor incididunt
          ut lobore et dolore magna cliqua. Ut enim ad minim veniom, quis nostrud exercitation
          ullomco lobons nisi ut aliquip ex ea commodo consequat. Duis oute irure dolor in
          reprehenderit In voluptote veut esse cillum dolore eu fugiot nulla ponceur Excepteur sint
          occoecat cupidatot non proident, sunt ln culpa qui officia deserunt mollit onim id est
          loborum lorem ipsum dolor sit omet, consectetur adipisicing elit, sed do elusmod tempor
          incididunt ut lobore et dolore magna ligua Ut enim ad minim veniam, quis nostrud
          exercitation ullomco lobons nisi ut oliquip ex eo commodo consequat Duis oute irure dolor
          in reprehendent in voluptote veut esse cillum dolore eu fugiot nullo parieur Excepteur
          sint occoecat cupidatot non proident, sunt in culpa qui officia deserunt mollit onim id
          est loborum{" "}
        </div>
      </div>

      <div className="button-container-centered">
        <Link to="/booking" className="btn-green">
          Je réserve mon Shooting
        </Link>
      </div>
    </div>
    <div className="page-section section-container">
      <Themes />
    </div>
  </div>
);

export default ShootingStudio;
