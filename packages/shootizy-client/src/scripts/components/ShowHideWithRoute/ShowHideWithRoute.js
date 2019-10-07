import { withRouter } from "react-router-dom";

import { array, string } from "prop-types";

const ShowHideWithRoute = ({ children, showWith, hideWith, location, defaultBehavior }) => {
  if (showWith.length) {
    return isRoute(location.pathname, showWith) ? children : null;
  }
  if (hideWith.length) {
    return isRoute(location.pathname, hideWith) ? null : children;
  }
  return defaultBehavior === "show" ? children : null;
};

const isRoute = (location, list) => {
  return list.some(route =>
    route instanceof RegExp ? route.test(location) : route.indexOf(location) === 0
  );
};

ShowHideWithRoute.propTypes = {
  hideWith: array,
  showWith: array,
  defaultBehavior: string,
};

ShowHideWithRoute.defaultProps = {
  showWith: [],
  hideWith: [],
  defaultBehavior: "show",
};

export default withRouter(ShowHideWithRoute);
