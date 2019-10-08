import React from "react";
import { Link } from "react-router-dom";
import Interweave from "interweave";
import { keyfix } from "../../../utils/utils";
//import PropTypes from "prop-types";

const data = keyfix([
  {
    number: "1",
    title: "Le Rendez-vous à prendre",
    text:
      "Réservez en 3 clics la date & l'heure de votre séance photo. <strong>So easy, so Shootizy</strong>",
  },
  {
    number: "2",
    title: "Vivez votre Shooting",
    text: "Au studio, nous révélons le meilleur de vous-même.",
  },
  {
    number: "3",
    title: "Choisissez vos photos",
    text:
      "Découvez instantanément vos clichés.<strong>Achetez seulement ceux que vous aimez.</strong>",
  },
]);

const CommentCaMarche = ({ className }) => (
  <section className={`CommentCaMarche page-section ${className}`}>
    <div className="container-2">
      <h2 className="title mb50">
        Votre Shooting Photo <strong>en 3 étapes !</strong>
      </h2>
      <ul className="row row-3">
        {data.map(({ number, title, text, key }) => (
          <li className="CommentCaMarche-item card card-simple card-shadow" key={key}>
            <div className="top-icon">{number}</div>
            <h2 className="title">{title}</h2>
            <p className="text">
              <Interweave content={text} />
            </p>
          </li>
        ))}
      </ul>
      <p class="button">
        <Link className="btn-white" to="/booking">
          Comment ça marche ?
        </Link>
      </p>
    </div>
  </section>
);

CommentCaMarche.propTypes = {
  // bla: PropTypes.string,
};

CommentCaMarche.defaultProps = {
  // bla: 'test',
};

export default CommentCaMarche;
