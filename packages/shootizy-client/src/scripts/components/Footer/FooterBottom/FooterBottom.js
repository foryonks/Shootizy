import React from "react";
import PropTypes from "prop-types";
import Logo from "../../Header/Logo";
import "./FooterBottom.scss";

const FooterBottom = props => (
  <div className="FooterBottom">
    <div className="container-2 footer-bottom-1 row">
      <div className="col">
        <Logo className="logo-inverted" />
      </div>
      <div className="description col">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis enim turpis, eu
        vehicula nisl lacinia ut. Ut urna ligula.
      </div>
      <div className="col">
        <img src="/assets/demo/footer-avis-client.png" alt="" />
      </div>
    </div>

    <div className="footer-bottom-2 row" />
  </div>
);

FooterBottom.propTypes = {
  // bla: PropTypes.string,
};

FooterBottom.defaultProps = {
  // bla: 'test',
};

export default FooterBottom;
