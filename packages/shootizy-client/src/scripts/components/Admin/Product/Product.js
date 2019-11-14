import React, { useState, useContext, useMemo } from "react";
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
        <ul className="row row-6">
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
                rows={5}
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

const List = ({ list, currentIndex, onItemClick }) => (
  <ul className="themes-admin__list">
    {list.map((product, index) => (
      <li
        key={product.productId}
        className={classNamesDedupe("themes-admin__list__item", {
          "themes-admin__list__item--selected": index === currentIndex,
        })}>
        <button
          onClick={() => {
            onItemClick(index);
          }}>
          {product.title}
        </button>
      </li>
    ))}
  </ul>
);

const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { state: appState, loadThemeProducts } = useContext(AppContext);
  const { themes = [], surMesures = [] } = appState;

  // Reload list on submit
  const handleSubmitSuccess = () => loadThemeProducts();

  const products = useMemo(() => [...themes, ...surMesures], [themes, surMesures]);
  const currentProduct = !!products.length && products[currentIndex];

  return (
    <div className="themes-admin">
      <div className="themes-admin__category">
        <div className="themes-admin__category__title">Thèmes</div>
        <List list={themes} currentIndex={currentIndex} onItemClick={setCurrentIndex} />
      </div>
      <div className="themes-admin__category">
        <div className="themes-admin__category__title">Sur mesures</div>
        <List
          list={surMesures}
          currentIndex={currentIndex - themes.length}
          onItemClick={index => setCurrentIndex(index + themes.length)}
        />
      </div>
      {currentProduct && (
        <Form
          id="form-admin-product"
          className="themes-admin__gallery"
          fields={FORM_FIELDS}
          submitBtn={FORM_SUBMIT_BTN}
          defaultFormData={{ gallery: currentProduct.gallery }}
          action={`/api/products/${currentProduct.productId}`}
          onSuccess={handleSubmitSuccess}
          successMessage="Done !"
        />
      )}
    </div>
  );
};

export default Product;
