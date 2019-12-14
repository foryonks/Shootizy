import React from "react";
import Interweave from "interweave";
import "./CommentCaMarche3blocks.scss";
import useMediaQuery, { phone } from "scripts/hooks/useMediaQuery";
import Carousel from "scripts/components/_common/Carousel";

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

const Blocks = ({ data }) => data.map(block => <Block {...block} key={block.number} />);

const Block = ({ number, title, text }) => (
  <div className="CommentCaMarche-item card card-simple card-shadow">
    <div className="top-icon">{number}</div>
    <h2 className="title">{title}</h2>
    <p className="ccm3b-text">
      <Interweave content={text} />
    </p>
  </div>
);

const CommentCaMarche3blocks = ({ className }) => {
  const isMobile = useMediaQuery(phone);

  return (
    <div className={`CommentCaMarche3blocksWrapper ${className || ""}`}>
      {isMobile ? (
        <Carousel
          items={data}
          showIndicators={true}
          centerMode={true}
          render={({ item, index }) => <Block {...item} key={item.number} />}
        />
      ) : (
        <div className="row row-3">
          <Blocks data={data} />
        </div>
      )}
    </div>
  );
};

export default CommentCaMarche3blocks;
