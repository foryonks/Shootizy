import React, { useEffect } from "react";
import { array, string, func } from "prop-types";
import Carousel from "scripts/components/_common/Carousel";
import "./ImageViewer.scss";

const ImageViewer = ({ images, selected, onClose }) => {
  const selectedItem = images.indexOf(selected);

  const eventListener = event => {
    if (event.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", eventListener);
    return () => {
      document.removeEventListener("keyup", eventListener);
    };
  });

  const close = () => {
    onClose();
  };

  return (
    <div className="ImageViewerWrapper">
      <button className="close" onClick={close}>
        &times;
      </button>
      {images && images.length ? (
        <Carousel
          className="carousel-green-arrows"
          selectedItem={selectedItem}
          items={images}
          render={ImageRenderer}
          useKeyboardArrows={true}
        />
      ) : null}
    </div>
  );
};

const ImageRenderer = ({ item, index, key }) => {
  //return <div className="imageViewer-image" style={{ backgroundImage: `url('${item}')` }} />;
  return (
    <div className="imageViewer-image" key={key}>
      <div className="image-outer">
        <img src={item.src} alt="" />
        <span className="description">
          <span>{item.description}</span>
        </span>
      </div>
    </div>
  );
};

ImageViewer.propTypes = {
  images: array,
  image: string,
  onClose: func,
};

ImageViewer.defaultProps = {
  images: [],
  image: "",
  onClose: () => {},
};

export default ImageViewer;
