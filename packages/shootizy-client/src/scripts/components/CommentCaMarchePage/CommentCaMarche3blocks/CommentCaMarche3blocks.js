import React from "react";
import Interweave from "interweave";
import "./CommentCaMarche3blocks.scss";

const data = [
  {
    number: "1",
    title: "Le Rendez-vous à prendre",
    text:
      "Réservez en 3 clics la date & l'heure de votre séance photo. <strong>So easy, so Shootizy</strong>",
  },
  {
    number: "2",
    title: "Shooting au Studio",
    text: "Au studio, nous révélons le meilleur de vous-même.",
  },
  {
    number: "3",
    title: "Un choix cornélien",
    text:
      "Découvez instantanément vos clichés.<strong>Achetez seulement ceux que vous aimez.</strong>",
  },
];

const CommentCaMarche3blocks = ({ className }) => (
  <div className={`CommentCaMarche3blocksWrapper ${className || ""}`}>
    <div className="row row-3">
      {data.map(({ number, title, text, key }) => (
        <div className="CommentCaMarche-item card card-simple card-shadow" key={number}>
          <div className="top-icon">{number}</div>
          <h2 className="title">{title}</h2>
          <p className="ccm3b-text">
            <Interweave content={text} />
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default CommentCaMarche3blocks;
