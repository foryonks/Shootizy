import React from "react";
import { Link } from "react-router-dom";

//import PropTypes from "prop-types";
import Logo from "../../Header/Logo";
import "./FooterBottom.scss";
import SocialButtons from "../../_common/SocialButtons";
import GlobalRating from "../../CustomerRating/GlobalRating/GlobalRating";

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
        link: "/confidentialite",
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

const FooterBottom = props => (
  <div className="FooterBottom">
    <div className="container-2 row">
      <div className="col col-logo">
        <Logo className="footer-logo" hideText={true} />
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis enim turpis, eu
          vehicula nisl lacinia ut. Ut urna ligula.
        </div>

        <a href="/contact" className="btn-green">
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
        Avis Clients <GlobalRating className="GlobalRating-footer" />
      </div>
    </div>
    {/* <a href="#top" className="btn-white">
      <Icon name="arrow-top" />
    </a>
     */}
  </div>
);

FooterBottom.propTypes = {
  // bla: PropTypes.string,
};

FooterBottom.defaultProps = {
  // bla: 'test',
};

export default FooterBottom;
