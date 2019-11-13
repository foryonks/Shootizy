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
      {imagesMatrix.map((col, indexCol) => {
        return (
          <div className="col" key={indexCol}>
            {col.map((image, indexImage) => (
              <div
                key={indexImage}
                className="image"
                onClick={() => {
                  showVisionneuse(image);
                }}>
                <span style={{ backgroundImage: `url('${image.url}')` }} />
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
      return {
        url: `/assets/demo/gallery/${(num < 10 ? "0" : "") + num}.jpg`,
        description:
          "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet",
      };
    });
};

export default Gallery;
