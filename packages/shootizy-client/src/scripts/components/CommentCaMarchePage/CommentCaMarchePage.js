import React from "react";
import { Link } from "react-router-dom";

import HeaderImage from "scripts/components/_common/HeaderImage";
import { Helmet } from "react-helmet";
import Prices from "scripts/components/_common/Prices";
import CommentCaMarche3blocks from "./CommentCaMarche3blocks";
import CarouselHome from "scripts/components/CarouselHome";
import VenirAuStudio from "scripts/components/Home/VenirAuStudio";

import "./CommentCaMarchePage.scss";

const CommentCaMarchePage = props => (
  <article className="CommentCaMarchePageWrapper page-section-grey">
    <Helmet bodyAttributes={{ class: "header-padding-page" }} />
    <HeaderImage
      className="with-header-cards mask-grey"
      src="/assets/design/headers/comment-ca-marche.svg"
      preTitle="Comment ça marche ?"
      title="<strong>Votre shooting en 3 étapes</strong>">
      <CommentCaMarche3blocks className="header-blocs container-2" />
    </HeaderImage>

    <Prices className="container-2 pt50" showTitle={true} showButton={true} />

    <div className="container-2 grey-text container-descriptions">
      <div className="mea-table mobile-column-reverse">
        <div className="mea-img img-half mobile-right-decal">
          <img src="/assets/design/comment-ca-marche/ccm01.png" alt="" />
        </div>
        <div className="mea-desc">
          <h2 className="title txt-l">
            <strong>Avant</strong> votre séance shooting ?
          </h2>
          <h4>Vous avez besoin de conseils ? </h4>
          <p>
            Quels vêtements choisir, quelles couleurs, comment vous maquiller, intégrer des
            accessoires…
            <br />
            L’Equipe Shootizy est à votre écoute.
          </p>
          <p>
            <Link to="/contact" className="btn-green-small">
              Contatez-nous
            </Link>
          </p>
          <p className="paragraph-messenger">
            <span className="img-messenger">
              <svg viewBox="0 0 39 39" version="1.1">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g
                    id="COMMENT-CA-MARCHE"
                    transform="translate(-970.000000, -2015.000000)"
                    fill="#0091FF">
                    <g id="MISE-AU-CLAIR" transform="translate(320.000000, 1633.000000)">
                      <g id="AVANT">
                        <g id="Texte" transform="translate(650.000000, 44.000000)">
                          <g id="Group-10" transform="translate(0.000000, 324.000000)">
                            <path
                              d="M19.5,14 C8.74705,14 0,22.2677229 0,32.4301997 C0,37.3688465 2.1203,42.1076712 5.85,45.568022 L5.85,54 L13.8047,50.0442971 C15.67605,50.5849163 17.58835,50.8603993 19.5,50.8603993 C30.25295,50.8603993 39,42.5926764 39,32.4301997 C39,22.2677229 30.25295,14 19.5,14 L19.5,14 Z M21.775,38.0885943 L16.0875,33.5644653 L5.85,38.0885943 L17.225,26.7743917 L22.9125,31.2985207 L33.15,26.771805 L21.775,38.0885943 Z"
                              id="Fill-1"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
            <span className="text">
              Vous pouvez aussi obtenir des réponses via le Chatbot en bas à droite de votre écran.
            </span>
          </p>
        </div>
      </div>

      <div className="mea-table">
        <div className="mea-desc">
          <h2 className="title txt-l">
            <strong>Pendant</strong> votre shooting !
          </h2>

          <h4>Pour nous, la photo est un art qui commence par</h4>
          <p>
            l’art de vous recevoir. <br />
            C’est pourquoi nos photographes sont aussi un peu barmen, dee-jays et coachs…  <br />
            En arrivant au studio, choisissez votre boisson de bienvenue. <br />
            Jus, thé, café, soda ? Macchiato ou Long sans sucre ? <br />
            Notre distributeur, de marque Delonghi, vous plonge d’emblée dans l’expérience visuelle
            et sensorielle Shootizy.
          </p>
          <h4>Vous souhaitez apporter votre musique?</h4>
          <p>
            Aucun problème ! Rien de tel pour vous sentir encore plus à l’aise pendant la séance ?
            Si besoin, nous choisirons ensemble l’ambiance sonore qui accompagnera le shooting.
          </p>
        </div>
        <div className="mea-img img-half">
          <img src="/assets/design/comment-ca-marche/ccm02.png" alt="" />
        </div>
      </div>

      <div className="mea-table mobile-column-reverse">
        <div className="mea-img img-half">
          <img src="/assets/design/comment-ca-marche/ccm03.png" alt="" />
        </div>
        <div className="mea-desc">
          <h2 className="title txt-l">
            <strong>Après le shooting…</strong>{" "}
          </h2>

          <p>
            Beaucoup de studios photo vous montrent gentiment la sortie sitôt votre shooting
            terminé. <br />
            <br /> Ce n’est pas du tout le genre de la maison ! Nous prendrons tout le temps pour
            choisir au calme vos photos.
          </p>
        </div>
      </div>

      <p className="txt-c page-button">
        <Link to="/booking" className="btn-green">
          Je réserve mon Shooting
        </Link>
      </p>
    </div>
    <CarouselHome useMask={false} className="carousel-inpage" />
    <VenirAuStudio />
  </article>
);

export default CommentCaMarchePage;
