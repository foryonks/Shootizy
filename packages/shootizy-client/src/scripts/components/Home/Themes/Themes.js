import React from "react";
import { keyfix, toMatrix } from "../../../utils/utils";
import "./Themes.scss";
import ThemeCard from "../ThemeCard";

const data = keyfix([
  {
    image: "/assets/photos/theme1.jpg",
    title: "Book modèle / Artistes Comédien",
    sharelink: "http://foobarbook.com",
    description:
      "Votre carte de visite professionnelle, c’est votre book. Pas besoin de surchauffer",
    bookingLink: "/shooting-1",
    moreLink: "/shooting",
    price: "20€",
  },
  {
    image: "/assets/photos/theme1.jpg",
    title: "Book modèle / Artistes Comédien",
    sharelink: "http://foobarbook.com",
    description:
      "Votre carte de visite professionnelle, c’est votre book. Pas besoin de surchauffer votre ... ",
    bookingLink: "/shooting-1",
    moreLink: "/shooting",
    price: "20€",
  },
  {
    image: "/assets/photos/theme1.jpg",
    title: "Book modèle / Artistes Comédien",
    sharelink: "http://foobarbook.com",
    description:
      "Votre carte de visite professionnelle, c’est votre book. Pas besoin de surchauffer votre ... ",
    bookingLink: "/shooting-1",
    moreLink: "/shooting",
    price: "20€",
  },
  {
    image: "/assets/photos/theme1.jpg",
    title: "Book modèle / Artistes Comédien",
    sharelink: "http://foobarbook.com",
    description:
      "Votre carte de visite professionnelle, c’est votre book. Pas besoin de surchauffer votre ... ",
    bookingLink: "/shooting-1",
    moreLink: "/shooting",
    price: "20€",
  },

  {
    image: "/assets/photos/theme1.jpg",
    title: "Book modèle / Artistes Comédien",
    sharelink: "http://foobarbook.com",
    description:
      "Votre carte de visite professionnelle, c’est votre book. Pas besoin de surchauffer votre ... ",
    bookingLink: "/shooting-1",
    moreLink: "/shooting",
    price: "20€",
  },
]);

const Themes = props => {
  const dataGrid = keyfix(toMatrix(data, 3, { transform: keyfix, fill: true }));
  return (
    <div className="Themes container-2 grid">
      <h2 className="title">
        Choisissez le thème de votre shooting, <br />
        <strong>selon votre besoin</strong>
      </h2>

      {dataGrid.map((row, indexRow) => (
        <div className="row row-3" key={indexRow}>
          {row.map((theme, indexTheme) =>
            theme === "" ? (
              <div className="dummyCard" key={indexTheme} />
            ) : (
              <ThemeCard {...theme} key={indexTheme} />
            )
          )}
        </div>
      ))}
    </div>
  );
};

Themes.propTypes = {
  // bla: PropTypes.string,
};

Themes.defaultProps = {
  // bla: 'test',
};

export default Themes;
