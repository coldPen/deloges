import React, { Fragment } from 'react';
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

export default AppRoute;
