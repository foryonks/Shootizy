import React from "react";
import { Link } from "react-router-dom";
import useRemoteContents from "scripts/hooks/useRemoteContents";

import FacebookShareButton from "scripts/components/_common/FacebookShareButton";

const Product = ({ match }) => {
  const { contents: product } = useRemoteContents(`/api/products/${match.params.productId}`);

  if (!product) {
    return null;
  }
  const { productId, image, title, sharelink, price, description } = product;
  const bookingLink = `/booking/${productId}`;

  //TO-DO Your page Arnaud
  return (
    <div className="ThemeCard card card-simple">
      <div className="ThemeCard-image">
        <img src={image} alt="" />
      </div>
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
