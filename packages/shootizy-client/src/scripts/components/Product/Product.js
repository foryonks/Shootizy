import React from "react";
import CrumbRoute from "scripts/components/Breadcrumbs/CrumbRoute";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

import useRemoteContents from "scripts/hooks/useRemoteContents";
import ThemesNavigation from "./ThemesNavigation/ThemesNavigation";
import Prices from "../_common/Prices";
import Interweave from "interweave";
import HeaderImage from "scripts/components/_common/HeaderImage";
import { Helmet } from "react-helmet";

import "./Product.scss";

const Product = ({ match }) => {
  const { contents: product } = useRemoteContents(`/api/products/${match.params.productId}`);

  if (!product) {
    return null;
  }

  const { productId, imageLarge, title, descTitle, description, gallery } = product;

  const bookingLink = { pathname: `/booking`, state: { productId } };

  return (
    <div className="ProductPage">
      <Helmet bodyAttributes={{ class: "header-padding-page header-reverse" }} />

      <HeaderImage
        src={imageLarge}
        className="header-image-shooting"
        preTitle="Shooting photo :"
        title={title}
        buttonLink={bookingLink}
        buttonText="Je réserve mon Shooting">
        <Prices className="Prices-header-product" textKey="product" />
      </HeaderImage>

      <CrumbRoute
        title={title}
        path="/shooting-studio/:productId"
        render={() => (
          <div className="page-content">
            <ThemesNavigation />
            <div className="product-description container-2">
              <h2 className="title">
                <Interweave content={descTitle} />
              </h2>
              <div className="description">
                <Interweave content={description} />
              </div>
              <div className="button-container-centered">
                <Link to={bookingLink} className="btn-green">
                  Je réserve mon Shooting
                </Link>
              </div>
              <LazyLoad height={400}>
                {gallery && (
                  <div className="centered-gallery">
                    <img src={gallery} alt="Gallerie" />
                  </div>
                )}
              </LazyLoad>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Product;
