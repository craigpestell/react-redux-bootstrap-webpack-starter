// @flow

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import * as AuthService from '../../../services/auth';
import type Auth from '../../../services/auth/types/Auth';
// #region imports
import React from 'react';
import RightNavButton from './rightNavButton/RightNavButton';
import { authActions } from '../../../redux/modules/auth';

// #endregion

// #region flow types
export type RightLink = {
  link: string,
  label: string,
  viewName: string,
};

export type OnRightNavButtonClick = (
  event: SyntheticEvent<>,
  viewName: string,
) => any;

type Props = {
  AuthService: Auth,
  rightLinks: Array<RightLink>,
  onRightNavButtonClick: OnRightNavButtonClick,
  ...any,
};
// #endregion

class RightNav extends React.Component {
  static propTypes = {
    AuthService: PropTypes.any,
    onRightNavButtonClick: PropTypes.func.isRequired,
    loginRequest: PropTypes.func.isRequired,
    logoutSuccess: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { AuthService } = this.props;
    this.AuthService = AuthService;
  }

  handleLogin = () => {
    this.AuthService.login();
    this.props.loginRequest();
  };

  handleLogout = () => {
    this.props.logoutSuccess();
    this.AuthService.logout(); // careful, this is a static method
  };

  render() {
    const { rightLinks, AuthService, onRightNavButtonClick } = this.props;
    return (
      <ul className="nav navbar-nav navbar-right">
        {rightLinks
          .filter(obj => {
            // console.log('AuthService:', AuthService.isAuthenticated);
            // console.log('obj:', obj);

            return true;
          })
          .map(({ link, label, viewName, ...props }, index) => {
            // (viewName === this.props)
            const testLabel = label + ' - ' + index;
            let navItem = (
              <RightNavButton
                key={index}
                link={link}
                label={testLabel}
                viewName={viewName}
                onClick={onRightNavButtonClick}
              />
            );
            if (label === 'login') {
              navItem = !AuthService.isTokenExpired() ? (
                <li key={index}>
                  <button onClick={this.handleLogout}>Logout</button>
                </li>
              ) : (
                <li key={index}>
                  <button onClick={this.handleLogin}>Login</button>
                </li>
              );
              /* if (auth.error) {
              <p>{JSON.stringify(AuthService.error)}</p>;
            }*/
            }
            return navItem;
          })}
      </ul>
    );
  }
}

// #region statics
RightNav.defaultProps = { rightLinks: [] };
RightNav.displayName = 'RightNav';
// #endregion

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = dispatch => ({
  loginRequest: () => dispatch(authActions.loginRequest()),
  logoutSuccess: () => dispatch(authActions.logoutSuccess()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(RightNav),
);

// export default RightNav;
