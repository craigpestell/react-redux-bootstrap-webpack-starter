// @flow

// #region imports
import React, { PureComponent } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import * as AuthService from '../../services/auth';
// #endregion

const handleLogin = () => {
  AuthService.login();
  this.props.loginRequest();
};

const handleLogout = () => {
  this.props.logoutSuccess();
  AuthService.logout(); // careful, this is a static method
  this.props.history.push({ pathname: '/' });
};

// #region flow types
type Props = {
  logoutSuccessHandler: any,
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  ...any,
};

type State = {
  logoutSuccessHandler: null,
  handleLogin: handleLogin,
  handleLogout: handleLogout,
};
// #endregion

class LogoutRoute extends PureComponent<Props, State> {
  // #region lifecycle
  componentDidMount() {
    // auth.clearAllAppStorage();
  }

  render() {
    return (
      <Route {...this.props}>
        <Redirect to={{ pathname: '/login' }} />
      </Route>
    );
  }
  // #endregion
}

export default withRouter(LogoutRoute);
