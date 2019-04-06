import React from "react";
import { keyfix, toMatrix } from "../../../utils/utils";
import "./Themes.scss";
import ThemeCard from "../ThemeCard";
import useRemoteContents from "scripts/hooks/useRemoteContents";

const data = keyfix([
  {
    image: "/assets/photos/theme1.jpg",
    title: "Book modèle / Artistes Comédien",
    sharelink: "http://foobarbook.com",
    description:
      "Votre carte de visite professionnelle, c’est votre book. Pas besoin de surchauffer",
    price: "20€",
  },
  {
    image: "/assets/photos/theme2.jpg",
    title: "Réseaux sociaux / Rencontres",
    sharelink: "http://foobarbook.com",
    description:
      "Comparez la qualité d’un selfie et celle d’un portrait de qualité pro. Il n’y a pas photo",
    price: "20€",
  },
  {
    image: "/assets/photos/theme3.jpg",
    title: "Couples / Duo",
    sharelink: "http://foobarbook.com",
    description:
      "Un cadeau de Saint Valentin, l’anniversaire de votre relation ? Un coup de folie douce, en mode coup de cœur ?",
    price: "20€",
  },
  {
    image: "/assets/photos/theme4.jpg",
    title: "Familles",
    sharelink: "http://foobarbook.com",
    description:
      "Future maman ? Nous réalisons régulièrement des séances photos, en général entre le 6ème et le 8ème mois de grossesse",
    price: "20€",
  },

  {
    image: "/assets/photos/theme5.jpg",
    title: "Carrières / CV LinkedIn",
    sharelink: "http://foobarbook.com",
    description:
      "Faites vraiment la différence, dans votre présentation personnelle et auprès de vos relations personnelles et...",
    price: "20€",
  },

  {
    image: "/assets/photos/theme1.jpg",
    title: "Groupes",
    sharelink: "http://foobarbook.com",
    description:
      "Associations, clubs, chorales, orchestres…  Plus on est de fous, plus on Shootizy.",
    price: "20€",
  },
  {
    image: "/assets/photos/theme1.jpg",
    title: "Fêtes / Anniversaires / Mariages",
    sharelink: "http://foobarbook.com",
    description:
      "Sitôt votre séance terminée, découvrez vos photos. Prenez votre temps, prenons-le ensemble au",
    price: "20€",
  },
  {
    image: "/assets/photos/theme1.jpg",
    title: "Enterrements de vie de jeune Fille / Garçon",
    sharelink: "http://foobarbook.com",
    description:
      "Sitôt votre séance terminée, découvrez vos photos. Prenez votre temps, prenons-le ensemble au studio.",
    price: "20€",
  },
  {
    image: "/assets/photos/theme1.jpg",
    title: "Grossesses / Naissances",
    sharelink: "http://foobarbook.com",
    description: "Sitôt votre séance terminée, découvrez vos photos. Prenez votre tempsv",
    price: "20€",
  },
]);

const Themes = props => {
  //const { contents } = useRemoteContents("/api/contents/home-detail-prices");
  const contents = { items: data };
  const items = contents ? contents.items : [];
  const dataGrid = keyfix(toMatrix(items, 3, { transform: keyfix, fill: true }));

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
