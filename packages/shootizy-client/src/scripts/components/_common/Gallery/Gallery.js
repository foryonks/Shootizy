import React from "react";
import { array } from "prop-types";
import "./Gallery.scss";
import { toMatrix } from "scripts/utils/utils";

const Gallery = ({ images }) => {
  const imagesMatrix = toMatrix(images, 2, {});
  const showVisionneuse = () => {};
  return (
    <div className="GalleryWrapper row row-3">
      {imagesMatrix.map(col => {
        return (
          <div className="col">
            {col.map(image => (
              <div
                className="image"
                style={{ "background-image": `url(${image})` }}
                onClick={showVisionneuse(image)}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

Gallery.propTypes = {
  images: array,
};

Gallery.defaultProps = {
  images: [],
};

Gallery.fakegallery = qty => {
  return new Array(qty)
    .join(" ")
    .split(" ")
    .map(() => {
      const num = Math.round(Math.random() * 19);
      return `/assets/demo/gallery/${(num < 10 ? "0" : "") + num}.png`;
    });
};

export default Gallery;
