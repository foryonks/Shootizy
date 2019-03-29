import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const LazyRoute = props => {
  const { component, render, lazyComponent: RouteComponent, ...acceptedProps } = props;
  return (
    <Route
      {...acceptedProps}
      render={componentProps => (
        <Suspense
          fallback={
            //TO-DO
            <div>Chargement en cours...</div>
          }>
          <RouteComponent {...componentProps} />
        </Suspense>
      )}
    />
  );
};

LazyRoute.propTypes = {
  lazyComponent: PropTypes.object.isRequired,
};

export default LazyRoute;
