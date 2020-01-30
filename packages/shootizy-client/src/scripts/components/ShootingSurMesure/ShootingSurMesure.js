import React, { useContext } from "react";
import "./ShootingSurMesure.scss";
import HeaderImage from "scripts/components/_common/HeaderImage";
import { Helmet } from "react-helmet";
import SurMesure from "./SurMesure";
import { Link } from "react-router-dom";
import FloatingBody from "./FloatingBody";
import ThemesLister from "scripts/components/_common/ThemesLister";
import VenirAuStudio from "scripts/components/Home/VenirAuStudio";
import { AppContext } from "scripts/contexts/App";

const entreprises = [
  "/assets/design/surmesure/entreprises/orange.jpg",
  "/assets/design/surmesure/entreprises/raja.jpg",
  "/assets/design/surmesure/entreprises/renault.jpg",
  "/assets/design/surmesure/entreprises/fleury-michon.jpg",
  "/assets/design/surmesure/entreprises/lanvin.jpg",
  "/assets/design/surmesure/entreprises/ministere-culture.jpg",
  "/assets/design/surmesure/entreprises/m6.jpg",
  "/assets/design/surmesure/entreprises/monceau-fleurs.jpg",
  "/assets/design/surmesure/entreprises/accor.jpg",
  "/assets/design/surmesure/entreprises/vinci.jpg",
];

const ShootingSurMesure = ({ className }) => {
  const { state: appState } = useContext(AppContext);
  const list = appState.surMesures;

  return (
    list && (
      <div className={`ShootingSurMesureWrapper page-section-grey-onmobile page-container`}>
        <Helmet bodyAttributes={{ class: "header-padding-page" }} />
        <HeaderImage
          src="/assets/design/headers/shooting-sur-mesure.svg"
          preTitle="Shooting sur mesure"
          title="Décrivez-nous votre besoin <br>et obtenez un <strong>devis gratuit</strong> sur mesure !"
        />
        <FloatingBody />
        <div className="container-2">
          <SurMesure fullForm={true} />
        </div>
        <div className="container-2 ">
          {list.map(({ productId, title, description, image }, index) => (
            <div
              className={`mea-table ${index % 2 ? "mobile-column-reverse" : ""}`}
              key={productId}>
              {!!(index % 2) && (
                <div className="mea-img">
                  <img src={image} alt="" />
                </div>
              )}
              <div className="mea-desc">
                <div>
                  <strong className="grey-text">Sur mesure</strong>
                </div>
                <h2 className="title">{title} ...</h2>
                <p className="grey-text">{description}</p>
                <p className="button">
                  <Link to="/exprimer" className="btn-green">
                    Exprimez votre besoin
                  </Link>
                </p>
              </div>
              {!(index % 2) && (
                <div className="mea-img">
                  <img src={image} alt="" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="container-2 ">
          <h2 className="title margin-title-surmesure">Quelques unes de nos réalisations</h2>
          <ThemesLister themesArray={list} />
        </div>
        <div className="section-paddings">
          <div className="container-2">
            <div className="clients">
              <div>
                <strong className="grey-text">Clients</strong>
              </div>
              <h2 className="title txt-l">Ils nous font confiance…</h2>

              <ul className="enterprises-confiance images-inline-list">
                {entreprises.map((img, key) => (
                  <li key={key}>
                    <img alt="" src={img} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <VenirAuStudio />
      </div>
    )
  );
};

export default ShootingSurMesure;
