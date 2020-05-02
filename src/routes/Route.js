import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../store';

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = store.getState().login.signed;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }
  // if (signed && !isPrivate) {
  //   return <Redirect to="/dashboard" />;
  // }

  return <Route {...rest} component={Component} />;
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouterWrapper.defaultTypes = {
  isPrivate: false,
};
