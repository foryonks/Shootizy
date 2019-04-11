import React from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import FacebookShareButton from "scripts/components/_common/FacebookShareButton";
import HeaderImage from "../_common/HeaderImage";

const Product = ({ match }) => {
  const { contents: product } = useRemoteContents(`/api/produits/${match.params.productId}`);

  if (!product) {
    return null;
  }

  const { productId, imageLarge, title, sharelink, price, description } = product;
  const bookingLink = `/booking/${productId}`;

  return (
    <div className="ThemePage">
      <HeaderImage
        src={imageLarge}
        preTitle="Shooting photo :"
        title={title}
        link={bookingLink}
        textButton="Je réserve"
      />
      <div className="ThemeCard-content">
        <div className="ThemeCard-actions">
          <button className="ThemeCard-price">Dès {price} la photo</button>
          <FacebookShareButton link={sharelink} />
        </div>
        <h4 className="ThemeCard-title">{title}</h4>
        <div className="ThemeCard-description">{description}</div>
        <div className="ThemeCard-buttons">
          <Link to={bookingLink} className="btn-green">
            Réserver mon shooting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
