import React, { useState, useContext, useEffect } from "react";
import classNamesDedupe from "classnames/dedupe";

import { AppContext } from "scripts/contexts/App";
import EditableImage from "scripts/components/_common/Editor/EditableImage";
import Form from "scripts/components/Form";

import "./Product.scss";

const FORM_FIELDS = [
  {
    type: "custom",
    name: "gallery",
    //label: "Galeries",
    render: (value, isError, onChange, onValidate) => {
      const images = value || [];

      const handleChange = (index, description, src) => {
        onChange("gallery", [
          ...images.slice(0, index),
          { description, src },
          ...images.slice(index + 1),
        ]);
      };
      return (
        <ul className="row row-3 row-wrap">
          {images.map(({ description, src }, index) => (
            <li key={`image-${index}`} className="themes-admin__gallery__item">
              <EditableImage
                onChange={image => {
                  handleChange(index, description, image);
                }}
                src={src}
                alt={`Image ${index}`}
              />
              <textarea
                value={description}
                onChange={ev => handleChange(index, ev.target.value, src)}
              />
            </li>
          ))}
        </ul>
      );
    },
  },
];
const FORM_SUBMIT_BTN = { label: "Publier", className: "btn-green" };

const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const { state: appState, loadThemeProducts } = useContext(AppContext);
  const themes = appState.themes || [];

  useEffect(() => {
    if (themes && currentIndex === -1) {
      setCurrentIndex(0);
    }
    // eslint-disable-next-line
  }, [themes]);

  // Reload list on submit
  const handleSubmitSuccess = () => loadThemeProducts();

  return (
    <div className="themes-admin">
      <div className="themes-admin__category">
        <div className="themes-admin__category__title">Thèmes</div>
        <ul className="themes-admin__list">
          {themes.map((product, index) => (
            <li
              key={product.productId}
              className={classNamesDedupe("themes-admin__list__item", {
                "themes-admin__list__item--selected": index === currentIndex,
              })}>
              <button
                onClick={() => {
                  setCurrentIndex(index);
                }}>
                {product.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {currentIndex !== -1 && (
        <Form
          id="form-admin-product"
          className="themes-admin__gallery"
          fields={FORM_FIELDS}
          submitBtn={FORM_SUBMIT_BTN}
          defaultFormData={{ gallery: themes[currentIndex].gallery }}
          action={`/api/products/${themes[currentIndex].productId}`}
          onSuccess={handleSubmitSuccess}
          successMessage="Done !"
        />
      )}
    </div>
  );
};

export default Product;
