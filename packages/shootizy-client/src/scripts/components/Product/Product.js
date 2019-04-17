import React from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import HeaderImage from "../_common/HeaderImage";
import ThemesNavigation from "./ThemesNavigation/ThemesNavigation";
import Prices from "../_common/Prices";
import Interweave from "interweave";

const Product = ({ match }) => {
  const { contents: product } = useRemoteContents(`/api/products/${match.params.productId}`);

  const { productId, imageLarge, title, descTitle, description, gallery } = product || {};

  const bookingLink = `/booking/${productId}`;

  return (
    <div className="ProductPage">
      <HeaderImage
        src={imageLarge}
        preTitle="Shooting photo :"
        title={title}
        buttonLink={bookingLink}
        buttonText="Je réserve">
        <Prices className="Prices-header-product" textKey="product" />
      </HeaderImage>

      <div className="page-content">
        <ThemesNavigation />

        <div className="product-description container-2">
          <h2 className="title">
            <Interweave content={descTitle} />
          </h2>

          <div className="description">
            <Interweave content={description} />
          </div>

          <div className="button">
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
    </div>
  );
};

export default Product;
