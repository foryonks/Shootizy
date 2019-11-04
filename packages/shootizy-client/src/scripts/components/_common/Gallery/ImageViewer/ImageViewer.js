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
      <Carousel
        className="carousel-green-arrows"
        selectedItem={selectedItem}
        items={images}
        render={ImageRenderer}
      />
    </div>
  );
};

const ImageRenderer = ({ item, index, key }) => {
  return <div className="imageViewer-image" style={{ "background-image": `url(${item})` }} />;
  // return (
  //   <div className="imageViewer-image">
  //     <span>
  //       <img src={item} alt="" />
  //     </span>
  //   </div>
  // );
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
