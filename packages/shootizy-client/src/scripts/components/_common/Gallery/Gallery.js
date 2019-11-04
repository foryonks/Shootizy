import React, { useState } from "react";
import { array } from "prop-types";
import "./Gallery.scss";
import { toMatrix } from "scripts/utils/utils";
import ImageViewer from "./ImageViewer";

const Gallery = ({ images }) => {
  const imagesMatrix = toMatrix(images, 2, {});
  const [showViewer, setShowViewer] = useState(false);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const showVisionneuse = image => {
    setShowViewer(true);
    setSelectedImage(image);
    document.documentElement.className += " viewerOpened";
  };
  const closeViewer = () => {
    setShowViewer(false);
    document.documentElement.className = document.documentElement.className.replace(
      / viewerOpened/g,
      ""
    );
  };
  return (
    <div className="GalleryWrapper row row-3">
      {imagesMatrix.map(col => {
        return (
          <div className="col">
            {col.map(image => (
              <div
                className="image"
                onClick={() => {
                  showVisionneuse(image);
                }}>
                <span style={{ "background-image": `url(${image})` }} />
              </div>
            ))}
          </div>
        );
      })}
      {showViewer && <ImageViewer selected={selectedImage} images={images} onClose={closeViewer} />}
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
      const num = Math.ceil(Math.random() * 15);
      return `/assets/demo/gallery/${(num < 10 ? "0" : "") + num}.jpg`;
    });
};

export default Gallery;
