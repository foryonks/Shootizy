import React from "react";
import { Link } from "react-router-dom";

//import PropTypes from "prop-types";
import Logo from "../../Header/Logo";
import SocialButtons from "../../_common/SocialButtons";
import GlobalRating from "../../CustomerRating/GlobalRating/GlobalRating";
import Icon from "../../Icon";
import "./FooterBottom.scss";
import animateScrollTo from "animated-scroll-to";

const data = [
  {
    label: "Découvrir",
    link: "",
    links: [
      {
        label: "Accueil",
        link: "/",
      },
      {
        label: "Comment ça marche ?",
        link: "/comment-ca-marche",
      },
      {
        label: "Tarifs",
        link: "/tarifs",
      },
      {
        label: "Contact",
        link: "/contact",
      },
    ],
  },
  {
    label: "Catégories",
    link: "/",
    links: [
      {
        label: "Shooting Studio",
        link: "/shooting-studio",
      },
      {
        label: "Shooting sur mesure",
        link: "/shooting-sur-mesure",
      },
      {
        label: "Notre Book",
        link: "/book",
      },
      {
        label: "Blog",
        link: "/blog",
      },
    ],
  },
  {
    label: "Liens utiles",
    link: "/",
    links: [
      {
        label: "Mentions légales",
        link: "/mentions-legales",
      },
      {
        label: "Confidentialité",
        link: "/politique-confidentialite",
      },
      {
        label: "Cookies",
        link: "/cookies",
      },
    ],
  },
];

function addIds(obj) {
  obj.forEach((item, i) => {
    if (item.links) addIds(item.links);
    item.id = `${i}-${~~(Math.random() * 10000000)}`;
  });
}
addIds(data);

const moveToTop = () => {
  animateScrollTo(0, {
    speed: 200,
  });
};

const FooterBottom = props => (
  <div className="FooterBottom">
    <div className="container-2 row footer-bottom-top">
      <button className="circle-button movetotop-button" onClick={moveToTop}>
        <Icon name="arrow-top" />
      </button>
      <div className="col col-logo">
        <Logo className="footer-logo" hideText={true} />
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis enim turpis, eu
          vehicula nisl lacinia ut. Ut urna ligula.
        </div>

        <a href="/contact" className="btn-green-small">
          Contact
        </a>
      </div>

      <div className="col col-links allLinks">
        <div className="row ">
          {data.map(cat => (
            <div className="col" key={cat.id}>
              <Link to={cat.link}>
                <h3 className="title">{cat.label}</h3>
              </Link>
              <ul>
                {cat.links.map(item => (
                  <li key={item.id}>
                    <Link to={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="container-2 footer-bottom-bottom row">
      <div className="col brand-and-social">
        <span>© Shootify.2019</span>
        <SocialButtons facebook={true} instagram={true} twitter={true} />
      </div>

      <div className="col col-rating">
        <span>Avis Clients</span>
        <GlobalRating className="GlobalRating-footer" showScore={true} />
      </div>
    </div>
  </div>
);

export default FooterBottom;
