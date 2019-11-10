import React, { useState } from "react";
//import PropTypes from "prop-types";
import "./PagesCustom.scss";
import PageCustomEditor from "./PageCustomEditor";

const PagesCustom = props => {
  let [pageSlug, setPageSlug] = useState();

  const onChange = event => {
    setPageSlug(event.currentTarget.value);
  };
  console.log("pageSlug", pageSlug);
  return (
    <div className="PagesCustomWrapper">
      <h2 className="title">Choisissez une page</h2>
      <div className="container-2">
        <div className="txt-c">
          <select className="select" onChange={onChange}>
            <option>---- Pages ----</option>
            <option value="politique-confidentialite">Page de Confidentialité</option>
          </select>
        </div>
        {pageSlug && <PageCustomEditor pageSlug={pageSlug} />}
      </div>
    </div>
  );
};

PagesCustom.propTypes = {
  // bla: PropTypes.string,
};

PagesCustom.defaultProps = {
  // bla: 'test',
};

export default PagesCustom;
