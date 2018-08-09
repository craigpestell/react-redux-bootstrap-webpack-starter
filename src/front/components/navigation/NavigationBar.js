// @flow

// #region imports
import React, { PureComponent } from 'react';
import * as auth from '../../services/auth';
import Humburger from './humburger/Humburger';
import LeftNav from './leftNav/LeftNav';
import RightNav from './rightNav/RightNav';
import { type LeftLink, type OnLeftNavButtonClick } from './leftNav/LeftNav';
import {
  type RightLink,
  type OnRightNavButtonClick,
} from './rightNav/RightNav';
// #endregion
import AuthType from '../../services/auth/type';
// #region flow types
export type Props = {
  auth: AuthType,
  brand: string,
  handleLeftNavItemClick: OnLeftNavButtonClick,
  handleRightNavItemClick: OnRightNavButtonClick,

  navModel: {
    leftLinks: Array<LeftLink>,
    rightLinks: Array<RightLink>,
  },

  ...any,
};

export type State = any;
// #endregion

class NavigationBar extends PureComponent<Props, State> {
  static defaultProps = { brand: 'brand', authService: auth };

  // #region life cycle
  render() {
    const {
      authService,
      brand,
      navModel,
      handleLeftNavItemClick,
      handleRightNavItemClick,
    } = this.props;

    return (
      <nav className="navbar navbar-default">
        <div className="containersCustom">
          <div className="navbar-header">
            {<Humburger />}
            <a className="navbar-brand">{brand}</a>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              {
                <LeftNav
                  leftLinks={navModel.leftLinks}
                  onLeftNavButtonClick={handleLeftNavItemClick}
                />
              }
            </ul>
            {
              <RightNav
                rightLinks={navModel.rightLinks}
                onRightNavButtonClick={handleRightNavItemClick}
                AuthService={authService}
                {...this.props}
              />
            }
          </div>
        </div>
      </nav>
    );
  }
  // #endregion
}

export default NavigationBar;
