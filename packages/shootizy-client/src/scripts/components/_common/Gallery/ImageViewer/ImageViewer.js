import React, { useEffect, useState, useRef } from "react";
import { array, string, func } from "prop-types";
import Carousel from "scripts/components/_common/Carousel";
import "./ImageViewer.scss";
import throttle from "lodash.throttle";

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
          infiniteLoop={true}
          useKeyboardArrows={true}
        />
      ) : null}
    </div>
  );
};

const ImageRenderer = ({ item, index, key }) => {
  const [imageClassname, setImageClassname] = useState("image-loading");
  const image = useRef(null);
  const imageContainer = useRef(null);

  const onImageLoaded = throttle(({ target }) => {
    setImageClassname("");
    if (target) {
      const { naturalHeight, naturalWidth, clientWidth, clientHeight } = target;
      const ratioNatural = naturalWidth / naturalHeight;
      const ratioDom = clientWidth / clientHeight;
      const resultRatio = ratioNatural / ratioDom;
      if (resultRatio < 0.97 || resultRatio > 1.03) {
        setImageClassname("image-height");
      }
    }
  });

  const onResize = () => {
    return onImageLoaded({ target: image.current });
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  // return <div className="imageViewer-image" style={{ backgroundImage: `url('${item}')` }} />;
  return (
    <div className="imageViewer-image" key={key} ref={imageContainer}>
      <div className="image-outer">
        <img ref={image} src={item.src} alt="" onLoad={onImageLoaded} className={imageClassname} />
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
