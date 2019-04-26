import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import HeaderImage from "../_common/HeaderImage";
import ThemesNavigation from "./ThemesNavigation/ThemesNavigation";
import Prices from "../_common/Prices";
import Interweave from "interweave";
import BookingForm from "scripts/components/Booking/Form";

import "./Product.scss";

const Product = ({ match }) => {
  const { contents: product } = useRemoteContents(`/api/products/${match.params.productId}`);

  if (!product) {
    return null;
  }

  const { productId, imageLarge, title, descTitle, description, gallery } = product;

  const bookingLink = `/shooting-studio/${productId}/booking`;

  return (
    <div className="ProductPage">
      <HeaderImage
        src={imageLarge}
        preTitle="Shooting photo :"
        title={title}
        buttonLink={bookingLink}
        buttonText="Je réserve mon Shooting">
        <Prices className="Prices-header-product" textKey="product" />
      </HeaderImage>

      <Switch>
        <Route
          path="/shooting-studio/:productId/booking"
          render={() => (
            <div className="container container-2">
              <h2 className="title">Réservez votre séance</h2>
              <div className="container-inside">
                <BookingForm productId={productId} />
              </div>
            </div>
          )}
        />
        <Route
          exact
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
                {gallery && (
                  <div className="centered-gallery">
                    <img src={gallery} alt="Gallerie" />
                  </div>
                )}
              </div>
            </div>
          )}
        />
        <Redirect to="/shooting-studio/:productId" />
      </Switch>
    </div>
  );
};

export default Product;
