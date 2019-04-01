import React from "react";
//import PropTypes from "prop-types";
import Logo from "../../Header/Logo";
import "./FooterBottom.scss";
import { keyfix } from "../../../utils/utils";
import SocialButtons from "../../_common/SocialButtons";

const data = keyfix([
  {
    label: "Nos Offres",
    link: "/offres",
    id: 1,
    links: keyfix([
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
    ]),
  },
  {
    label: "Nos Offres",
    link: "/offres",
    id: 2,
    links: keyfix([
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
    ]),
  },
  {
    label: "Nos Offres",
    link: "/offres",
    id: 3,
    links: keyfix([
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
    ]),
  },
  {
    label: "Nos Offres",
    link: "/offres",
    id: 4,
    links: keyfix([
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
    ]),
  },
]);
const FooterBottom = props => (
  <div className="FooterBottom">
    <div className="container-2 footer-bottom-1 row">
      <div className="col">
        <Logo className="logo-inverted" />
      </div>
      <div className="description col">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis enim turpis, eu
        vehicula nisl lacinia ut. Ut urna ligula.
      </div>
      <div className="col">
        <img src="/assets/demo/footer-avis-client.png" alt="" />
      </div>
    </div>

    <div className="container-2 footer-bottom-2 row">
      <div className="col allLinks">
        <div className="row ">
          {data.map(cat => (
            <div className="col" key="cat.id">
              <a href={cat.link}>
                <h3 class="title">{cat.label}</h3>
              </a>
              <ul>
                {cat.links.map(item => (
                  <li ley={item.id}>
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
        <a href="/" className="btn-green btn-small">
          Réserver mon shooting
        </a>
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
