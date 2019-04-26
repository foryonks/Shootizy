import React from "react";
import { Link } from "react-router-dom";

//import PropTypes from "prop-types";
import Logo from "../../Header/Logo";
import "./FooterBottom.scss";
import SocialButtons from "../../_common/SocialButtons";
import GlobalRating from "../../CustomerRating/GlobalRating/GlobalRating";

const data = [
  {
    label: "Nos Offres",
    link: "/offres",
    id: 1,
    links: [
      {
        label: "Book Modèle",
        link: "/",
        id: 1,
      },
      {
        label: "Book Modèle",
        link: "/",
        id: 2,
      },
      {
        label: "Book Modèle",
        link: "/",
        id: 3,
      },
      {
        label: "Book Modèle",
        link: "/",
        id: 4,
      },
    ],
  },
  {
    label: "Nos Offres",
    link: "/offres",
    id: 2,
    links: [
      {
        label: "Book Modèle",
        link: "/",
        id: 11,
      },
      {
        label: "Book Modèle",
        link: "/",
        id: 21,
      },
      {
        label: "Book Modèle",
        link: "/",
        id: 31,
      },
      {
        label: "Book Modèle",
        link: "/",
        id: 41,
      },
    ],
  },
  {
    label: "Nos Offres",
    link: "/offres",
    id: 3,
    links: [
      {
        label: "Book Modèle",
        link: "/",
        id: 12,
      },
      {
        label: "Book Modèle",
        link: "/",
        id: 22,
      },
      {
        label: "Book Modèle",
        link: "/",
        id: 32,
      },
      {
        label: "Book Modèle",
        link: "/",
        id: 42,
      },
    ],
  },
  {
    label: "Nos Offres",
    link: "/offres",
    id: 4333,
    links: [
      {
        label: "Book Modèle",
        link: "/",
        id: 13,
      },
      {
        label: "Book Modèle",
        link: "/",
        id: 23,
      },
      {
        label: "Book Modèle",
        link: "/",
        id: 33,
      },
      {
        label: "Book Modèle",
        link: "/",
        id: 43,
      },
    ],
  },
];
const FooterBottom = props => (
  <div className="FooterBottom">
    <div className="container-2 footer-bottom-1 row">
      <div className="col">
        <Logo className="logo-inverted footer-logo" />
      </div>
      <div className="description col">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis enim turpis, eu
        vehicula nisl lacinia ut. Ut urna ligula.
      </div>
      <div className="col">
        <GlobalRating title="Avis de nos clients" className="GlobalRating-footer" />
      </div>
    </div>

    <div className="container-2 footer-bottom-2 row">
      <div className="col allLinks">
        <div className="row ">
          {data.map(cat => (
            <div className="col" key={cat.id}>
              <a href={cat.link}>
                <h3 className="title">{cat.label}</h3>
              </a>
              <ul>
                {cat.links.map(item => (
                  <li key={item.id}>
                    <a href={item.link}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="col follow-us">
        <h3 className="title">Suivez-nous !</h3>
        <SocialButtons />
        <Link to="/booking" className="btn-green btn-small">
          Réserver mon Shooting
        </Link>
      </div>
    </div>
  </div>
);

FooterBottom.propTypes = {
  // bla: PropTypes.string,
};

FooterBottom.defaultProps = {
  // bla: 'test',
};

export default FooterBottom;
