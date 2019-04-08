import React from "react";
//import PropTypes from "prop-types";
import Icon from "../../Icon";
import "./NewsletterSubscribeFooter.scss";

import Form from "scripts/components/Form";

const FORM_FIELDS = [
  {
    type: "email",
    name: "email",
    placeholder: "ex : julien@yahoo.fr",
    isRequired: true,
    hideFeedback: true,
  },
];
const FORM_SUBMIT_BTN = {
  className: "arrow-button",
  label: <Icon name="arrow-right" />,
  wrapper: null,
};

const NewsletterSubscribeFooter = props => (
  <div className="NewsletterSubscribeFooter ">
    <div className="row container-2">
      <div className="col">
        <h3 className="title">Gagnez à nous suivre ! Abonnez-vous à notre newsletter</h3>
        <p>Profitez de nos bons plans réguliers, offres spéciales et partenariats avantageux… </p>
      </div>
      <div className="col">
        <Form
          id="form-newsletter"
          fields={FORM_FIELDS}
          submitBtn={FORM_SUBMIT_BTN}
          action="/api/newsletter"
          successMessage="Merci pour votre souscription !"
        />
      </div>
    </div>
  </div>
);

NewsletterSubscribeFooter.propTypes = {
  // bla: PropTypes.string,
};

NewsletterSubscribeFooter.defaultProps = {
  // bla: 'test',
};

export default NewsletterSubscribeFooter;
