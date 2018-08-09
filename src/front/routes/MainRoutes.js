// @flow
import * as AuthService from '../services/auth';

// #region imports
import React from 'react';
import { Route, Switch } from 'react-router';
import { Home, About, PageNotFound, Protected, Catalog } from './routes';
import LogoutRoute from '../components/logoutRoute/LogoutRoute';
import PrivateRoute from '../components/privateRoute/PrivateRoute';
// #endregion

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/about" component={About} />
      <PrivateRoute path="/protected" component={Protected} />
      <LogoutRoute path="/logout" />
    </Switch>
  );
};

export default MainRoutes;
