import React from "react";
import "./CommentCaMarchePage.scss";
import HeaderImage from "scripts/components/_common/HeaderImage";
import HeaderCards from "scripts/components/_common/HeaderCards";

const headerData = [
  {
    title: "Prenez Rendez-vous",
    text:
      "Choisissez la date et l'heure de votre shooting en 3 clics, tout est simple avec Shootizy",
  },
  {
    title: "Shooting au studio",
    text:
      "Choisissez la date et l'heure de votre shooting de 45 minutes en 3 clics, tout est simple avec shootizy",
  },
  {
    title: "Choisissez vos clichés",
    text: "Découvrez vos photos et payez uniquement celles que vous aimez",
  },
];

const CommentCaMarchePage = props => (
  <article className="CommentCaMarchePageWrapper">
    <HeaderImage
      src="/assets/photos/themes/book-artiste/large.jpg"
      title="Comment ça marche"
      className="with-header-cards">
      <HeaderCards data={headerData} className="container-2" />
    </HeaderImage>
    <div className="text container-2">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo ex, scelerisque vel turpis
        vitae, scelerisque condimentum elit. Vestibulum rutrum ultrices blandit. Etiam condimentum
        tincidunt felis non tempor. Integer luctus, orci vel viverra posuere, dolor felis feugiat
        dolor, ac tincidunt neque eros in sem. Suspendisse et nisl nunc. Nullam sed purus venenatis,
        sagittis neque non, porta nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent tincidunt sapien eget quam tempus faucibus.
      </p>

      <p>
        Nullam aliquam arcu et suscipit consectetur. Ut augue eros, semper in imperdiet sed,
        sagittis a erat. Suspendisse dapibus lacus sed ultrices luctus. Sed sit amet leo dignissim
        velit mollis laoreet a non arcu. Sed sed pretium mauris. Sed a urna vitae neque varius
        feugiat. Suspendisse pulvinar pharetra risus eget sollicitudin. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Sed pharetra suscipit gravida. Mauris porttitor, tellus
        vitae vehicula gravida, est nunc facilisis purus, vel pretium lorem diam id urna. Donec
        facilisis eget quam in posuere. In id ultrices dui.
      </p>
    </div>

    <p className="button-container-centered">
      <a href="/booking" className="btn-green">
        Réserver ma séance
      </a>
    </p>
  </article>
);

export default CommentCaMarchePage;
