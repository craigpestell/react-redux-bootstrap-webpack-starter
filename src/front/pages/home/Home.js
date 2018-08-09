// @flow

// #region imports
import React, { PureComponent } from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import HomeInfo from './styled/HomeInfo';
import MainTitle from './styled/MainTitle';
import LightNote from './styled/LightNote';
// #endregion
import * as auth from '../../services/auth';
import AuthType from '../../services/auth/type';
// #region flow types
export type Props = {
  auth: AuthType,
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  ...any,
};

export type State = any;
// #endregion

class Home extends PureComponent<Props, State> {
  static defaultProps = { authService: auth };
  render() {
    const { authService } = this.props;
    let Profile = <div>Please login.</div>;
    /*

    */
    if (!authService.isTokenExpired()) {
      const profile = authService.getProfile();
      Profile = (
        <div>
          <h3>profile...</h3>
          <img src={profile.picture} height="40px" alt="profile" />
          <span>Welcome, {profile.nickname}</span>
        </div>
      );
    }

    return (
      <div>
        <Jumbotron>
          <HomeInfo>
            <MainTitle>ReactJS 16.3+ Redux Bootstrap</MainTitle>
            <h2>
              with Hot Reload (<i>react-hot-loader 4+</i>
              )!!!
            </h2>
            <h2>and React Router v4</h2>
            <h2>and webpack 4.x</h2>
            <h2>
              and styled-components (
              <LightNote>
                so keep using SCSS like styles and benefit performant css-in-js
              </LightNote>
              )
            </h2>
            <h1>Starter</h1>
            {Profile}
            <Link className="btn btn-success btn-lg" to={'/about'}>
              <i className="fa fa-info" />
              &nbsp; go to about
            </Link>
          </HomeInfo>
        </Jumbotron>
      </div>
    );
  }
  // #endregion
}

export default Home;
