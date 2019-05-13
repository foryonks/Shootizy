import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const LazyRoute = props => {
  const { component, render, extendedProps, lazyComponent: RouteComponent, ...routeProps } = props;
  return (
    <Route
      {...routeProps}
      render={componentProps => (
        <Suspense
          fallback={
            //TO-DO
            <div>Chargement en cours...</div>
          }>
          <RouteComponent {...componentProps} {...extendedProps} />
        </Suspense>
      )}
    />
  );
};

LazyRoute.propTypes = {
  lazyComponent: PropTypes.object.isRequired,
  extendedProps: PropTypes.object,
};
LazyRoute.defaultProps = {
  extendedProps: {},
};
export default LazyRoute;
