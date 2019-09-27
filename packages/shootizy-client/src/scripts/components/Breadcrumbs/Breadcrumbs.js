import React from "react";
import classNamesDedupe from "classnames/dedupe";
import { Breadcrumbs as ReactBreadcrumbs } from "react-breadcrumbs";

import "./Breadcrumbs.scss";

const Breadcrumbs = ({ className, ...breadcrumbsProps }) => (
  <ReactBreadcrumbs
    className={classNamesDedupe(className, "breadcrumbs-wrapper")}
    separator="/"
    setCrumbs={crumbs => {
      // If there's only 1 piece (Home page) => no need to show
      return crumbs.length === 1 ? [] : crumbs;
    }}
    {...breadcrumbsProps}
  />
);

export default Breadcrumbs;
