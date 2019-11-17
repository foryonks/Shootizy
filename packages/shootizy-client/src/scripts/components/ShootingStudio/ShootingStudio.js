import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import HeaderImage from "scripts/components/_common/HeaderImage";
import Product from "scripts/components/Product";
import FloattingItems from "./FloattingItems";
import CarouselHome from "scripts/components/CarouselHome";
import Themes from "scripts/components/Home/Themes";
import SurMesure from "scripts/components/ShootingSurMesure/SurMesure";
import CommentCaMarche from "scripts/components/Home/CommentCaMarche";
import VenirAuStudio from "scripts/components/Home/VenirAuStudio";
import "./ShootingStudio.scss";

const Main = () => (
  <>
    <HeaderImage
      src="/assets/design/headers/shooting-studio.svg"
      preTitle="Shooting Studio"
      title="<strong>Il était une fois vous</strong>"
      subTitle={`<span class="big">by Shootizy</span>`}
    />

    <div className="main container-2">
      <div className="studio-photo-block mb50">
        <FloattingItems />

        <div className="button-container-centered">
          <Link to="/booking" className="btn-green">
            Voir nos thématiques
          </Link>
        </div>
      </div>
    </div>
    <div className="page-section page-section-green esprit-shootizy">
      <div className="container-2">
        <h2 className="title mb100">
          <strong>L’Esprit Shootizy,</strong> <br />
          une expérience <strong>en 3D</strong>
        </h2>
        <div className="row row-3 txt-c">
          <div className="col">
            <h2 className="title">
              <strong>Démocratiser</strong>
            </h2>
            <p>le shooting photo professionnel grâce à des prix optimisés, sans frais cachés.</p>
          </div>
          <div className="col">
            <h2 className="title">
              <strong>Décrisper</strong>
            </h2>
            <p>
              cette expérience parfois intimidante, par la simplicité, le fun et la bienveillance.
            </p>
          </div>
          <div className="col">
            <h2 className="title">
              <strong>Démultiplier !</strong>
            </h2>
            <p>
              votre satisfaction avec des services inventifs, qui prolongent et enrichissent votre
              shooting.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="pt100 page-section-white pb100  ">
      <div className="container-2">
        <div className="mea-table studio-taille-humaine">
          <div className="mea-desc">
            <div className="pretitle-machin">
              <strong className="grey-text">Le studio</strong>
            </div>
            <h2 className="title txt-l">
              Un studio à taille <strong>humaine !</strong>{" "}
            </h2>
            <p className="grey-text">
              <strong>Notre Studio fait 70 m2. </strong>Au delà du shooting photo, Shootizy est une
              structure qui réalise des productions audiovisuelles, notamment pour le festival de
              Cannes. Notre matériel à votre service est donc de qualité cinéma. <br />
              <br />
              « Le shooting photo qui vous chouchoute » fait de vous une star en douceur et toute
              complicité.
            </p>
            <Link to="/galerie" className="btn-green mt50">
              La galerie Photo
            </Link>
          </div>
          <div className="mea-img img-half">
            <img src="/assets/design/shooting-studio/human-size.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div className="section-container">
      <Themes />
      <SurMesure fullForm={true} />
    </div>

    <CommentCaMarche />
    <CarouselHome useMask={false} />
    <VenirAuStudio />
  </>
);

const ShootingStudio = props => (
  <div className="ShootingStudioPage page-container">
    <Helmet bodyAttributes={{ class: "header-padding-page" }} />

    <Switch>
      <Route path="/shooting-studio/:productId" component={Product} />
      <Route exact path="/shooting-studio" component={Main} />
    </Switch>
  </div>
);

export default ShootingStudio;
