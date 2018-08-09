// @flow

// #region imports
import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import * as AuthService from '../../services/auth';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  // parent
  component: any,
  path: string,

  ...any,
};
type State = any;
// #endregion

class PrivateRoute extends Component<Props, State> {
  // #region lifecycle
  render() {
    const { component: InnerComponent, ...rest } = this.props;
    const { location } = this.props;

    const isUserAuthenticated = this.isAuthenticated();
    const isTokenExpired = false; // this.isExpired();

    return (
      <Route
        {...rest}
        render={props =>
          !isTokenExpired && isUserAuthenticated ? (
            <InnerComponent {...props} />
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        }
      />
    );
  }
  // #endregion

  isAuthenticated() {
    // const checkUserHasId = user => user && user.id;
    // const user = auth.getUserInfo() ? auth.getUserInfo() : null;
    // return auth.isAuthenticated();
    return true;
  }

  isExpired() {
    return AuthService.isExpiredToken(AuthService.getToken());
  }
}

export default withRouter(PrivateRoute);
