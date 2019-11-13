import React from "react";
import "./Tarifs.scss";
import HeaderImage from "scripts/components/_common/HeaderImage";
import Themes from "../Home/Themes/Themes";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Interweave from "interweave";
import CommentCaMarche from "scripts/components/Home/CommentCaMarche";
const TARIFS_ITEMS = [
  {
    title: "Photo à l’unité",
    subText: "Choisissez les photos<br>qui vous plaisent le plus !",
    price: "<strong>20 €</strong><small>/photo</small>",
    image: "/assets/design/tarifs/tarif1.svg",
    options: [
      {
        value: "Séance Shooting offerte !",
        className: "high",
      },
      {
        value: "Pour 2 à 6 personnes",
        className: "high",
      },
      {
        value: "Lorem ipsum dolor sit amet",
        className: "low",
      },
      {
        value: "Sed ut perspiciatis",
        className: "low",
      },
      {
        value: "Newmo enim ipsam",
        className: "low",
      },
    ],
  },
  {
    title: "Le Pack 150",
    subText: "Contenant jusqu’à 150 photos<br>(soit 1€ la photo).",
    price: "<strong>150 €</strong>",
    image: "/assets/design/tarifs/tarif2.svg",
    options: [
      {
        value: "Séance Shooting offerte !",
        className: "high",
      },
      {
        value: "Pour 2 à 6 personnes",
        className: "high",
      },
      {
        value: "Lorem ipsum dolor sit amet",
        className: "medium",
      },
      {
        value: "Sed ut perspiciatis",
        className: "low",
      },
      {
        value: "Newmo enim ipsam",
        className: "low",
      },
    ],
  },
  {
    title: "Sur mesure",
    subText: "A la carte, des prix sages comme des images.",
    price: "<strong>Devis gratuit</strong>",
    image: "/assets/design/tarifs/tarif3.svg",
    buttonLink: "/shooting-sur-mesure",
    options: [
      {
        value: "Séance Shooting offerte !",
        className: "high",
      },
      {
        value: "Pour 2 à 6 personnes",
        className: "high",
      },
      {
        value: "Lorem ipsum dolor sit amet",
        className: "medium",
      },
      {
        value: "Sed ut perspiciatis",
        className: "medium",
      },
      {
        value: "Newmo enim ipsam",
        className: "medium",
      },
    ],
  },
];

const Tarifs = props => (
  <div className="Tarifs page-container page-section-grey">
    <Helmet bodyAttributes={{ class: "header-padding-page" }} />
    <HeaderImage
      className="header-image-generic mask-grey with-header-cards"
      src="/assets/design/headers/tarifs.svg"
      preTitle="Tarifs"
      title="Un peu de tarifs <strong>blabla</strong>">
      <div className="row row-3 container-2 header-prices">
        {TARIFS_ITEMS.map(({ title, subText, price, image, options, buttonLink }) => (
          <div className="card card-shadow card-simple tarif-item">
            <div className="tarif-item--top">
              <div className="image">
                <img src={image} alt="" />
              </div>
              <h2 className="title">{title}</h2>
              <div className="tarif-subtext">
                <Interweave content={subText} />
              </div>
              <div className="tarif-price">
                <Interweave content={price} />
              </div>
            </div>
            <div className="tarif-item--options">
              <ul>
                {options.map(({ value, className }) => (
                  <li className={className}>{value}</li>
                ))}
              </ul>
              {buttonLink && (
                <div className="txt-c mt50">
                  <Link to={buttonLink} className="btn-green btn-small">
                    En savoir plus
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </HeaderImage>

    <div className="main container-2 row row-2 mode-paiement mt200 mb100">
      <div className="col">
        <h3 className="title">Mode de paiement</h3>
        <div className="text-big">
          Vous ne pouvez pas encore régler par transmission de pensée…
          <br />
          <strong>Mais on y travaille ;-)</strong>
        </div>
        <div className="mt50">
          <img src="/assets/design/tarifs/cards.png" alt="" />
        </div>
      </div>
      <div className="col">
        <img src="/assets/design/tarifs/cochon.png" alt="" />
      </div>
    </div>

    <div className="politque-paiement pageCustom-content container-2 mb100">
      <h3 className="title">Paiement</h3>

      <div className="text">
        <p>
          Cette Politique de confidentialité décrit comment Adobe (également désigné par « nous », «
          notre » ou « nos ») utilisera vos informations dans les contextes suivants :
        </p>
        <ul>
          <li>
            les sites Web Adobe ; les services en ligne tels que Behance, ainsi que les éléments en
            ligne de Creative Cloud, de Document Cloud et d’Experience Cloud (communément désignés
            par « sites Web ») ;
          </li>
          <li>
            les sites Web Adobe ; les services en ligne tels que Behance, ainsi que les éléments en
            ligne de Creative Cloud, de Document Cloud et d’Experience Cloud (communément désignés
            par « sites Web ») ;
          </li>
          <li>les pratiques marketing, commerciales et publicitaires d’Adobe.</li>
        </ul>
        <p>
          Veuillez noter que les sites Web et les applications fournis par certaines entreprises
          acquises par Adobe peuvent fonctionner selon leurs propres politiques de confidentialité
          jusqu’à ce que leurs pratiques de confidentialité soient intégrées aux pratiques de
          confidentialité d’Adobe. Pour obtenir la liste actuelle de ces entreprises, cliquez ici.
          Des informations de confidentialité supplémentaires sont proposées pour certaines
          applications et certains sites Web Adobe.
        </p>
      </div>
    </div>

    <CommentCaMarche />
    <div className="page-section page-section-grey">
      <Themes />
    </div>
  </div>
);

export default Tarifs;
