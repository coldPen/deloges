import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const AppRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={renderProps => {
      const {
        staticContext = {},
        location: { pathname },
      } = renderProps;

      if (pathname.match(/[^/]\/+$/)) {
        staticContext.statusCode = 301;
        return <Redirect to={pathname.replace(/([^/])\/+$/, '$1')} />;
      }

      return <Component {...renderProps} />;
    }}
  />
);

AppRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.string])
    .isRequired,
};

export default AppRoute;
