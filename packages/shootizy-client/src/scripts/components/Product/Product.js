import React from "react";
import CrumbRoute from "scripts/components/Breadcrumbs/CrumbRoute";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Prices from "scripts/components/_common/Prices";
import VenirAuStudio from "scripts/components/Home/VenirAuStudio";

import useRemoteContents from "scripts/hooks/useRemoteContents";

//import Prices from "../_common/Prices";
import Interweave from "interweave";
import HeaderImage from "scripts/components/_common/HeaderImage";
import { Helmet } from "react-helmet";
import CommentCaMarche from "scripts/components/Home/CommentCaMarche";
import Gallery from "scripts/components/_common/Gallery";
import Themes from "scripts/components/Home/Themes/Themes";

import "./Product.scss";

const Product = ({ match }) => {
  const { contents: product } = useRemoteContents(`/api/products/${match.params.productId}`);

  if (!product || !product.tags.includes("theme")) {
    return null;
  }

  const { productId, imageLarge, title, descTitle, description } = product;
  const bookingLink = { pathname: `/booking`, state: { productId, productTitle: title } };

  return (
    <div className="ProductPage ">
      <Helmet bodyAttributes={{ class: "header-padding-page header-reverse page-section-grey" }} />

      <HeaderImage
        src={imageLarge}
        className="header-image-shooting mask-grey"
        preTitle="Shooting photo :"
        title={title}
        subTitle="SHOOTING OFFERT puis 20 € la photo ou 150 € Le Pack 150 photos"
      />

      <div className="pb50 page-section-grey">
        <div className="txt-c button-over-middle">
          <Link to={bookingLink} className="btn-green">
            Je réserve mon shooting
          </Link>
        </div>
      </div>
      <div className="page-section page-section-grey pb50">
        <div className="container-2">
          <CrumbRoute
            title={title}
            path="/shooting-studio/:productId"
            render={() => (
              <div className="">
                <div className="product-description container-2 row row-2">
                  <div className="col">
                    <div className="pre-title grey-text txt-l">{title}</div>
                    <h2 className="title txt-l mt50">
                      <Interweave content={descTitle} />
                    </h2>
                    <div className="description">
                      <Interweave content={description} />
                    </div>
                    <div className="txt-l mt50">
                      <Link to={bookingLink} className="btn-green">
                        Je réserve mon Shooting
                      </Link>
                    </div>
                  </div>
                  <div className="col image-description">
                    <img
                      src={
                        product.textImage ||
                        "/assets/photos/themes/fetes-anniversaires/image-pres.png"
                      }
                      alt=""
                      className="description-image"
                    />
                    <div />
                  </div>
                </div>

                <div className="container-2 mt100">
                  <LazyLoad height={400}>
                    <h2 className="title">Quelques unes de nos réalisations</h2>
                    <div className="centered-gallery mt50">
                      <Gallery images={product.gallery} />
                    </div>
                  </LazyLoad>

                  <Themes
                    className="mt100"
                    title={
                      <>
                        Découvrez les autres thèmes disponibles <br />
                        de <strong>votre studio préféré Shootizy !</strong>
                      </>
                    }
                  />
                </div>
              </div>
            )}
          />
        </div>
      </div>
      <div className="page-section-white pb100">
        <Prices
          className="Prices-header-product page-container-white container-2 pt50"
          textKey="product"
          showTitle={true}
          showButton={true}
        />
      </div>
      <CommentCaMarche className="CommentCaMarche-Home" />

      <VenirAuStudio />
    </div>
  );
};

export default Product;
