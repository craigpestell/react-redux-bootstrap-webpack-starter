// @flow

// #region imports
import React, { PureComponent } from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import * as AuthService from '../../services/auth';
// #endregion

// #region flow types
export type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,
  AuthService: () => any,
  // userAuth:
  isAuthenticated: boolean,
  isFetching: boolean,
  isLogging: boolean,
  auth: () => any,
  loginRequest: () => any,
  loginSuccess: () => any,
};

export type State = {
  email: string,
  password: string,
};
// #endregion

class Login extends PureComponent<Props, State> {
  static defaultProps = {
    isFetching: false,
    isLogging: false,
  };

  state = {
    email: '',
    password: '',
  };
  handleLoginClick = () => {
    AuthService.login();
    this.props.loginRequest();
  };

  handleLogoutClick = () => {
    this.props.logoutSuccess();
    AuthService.logout(); // careful, this is a static method
    this.props.history.push({ pathname: '/' });
  };
  // #region lifecycle methods
  componentDidMount() {
    const { disconnectUser } = this.props;

    disconnectUser(); // diconnect user: remove token and user info
  }

  render() {
    const { email, password } = this.state;

    const { isLogging } = this.props;

    return (
      <div className="content">
        <Row>
          <Col md={4} mdOffset={4} xs={10} xsOffset={1}>
            <form className="form-horizontal" noValidate>
              <fieldset>
                <legend>Login</legend>

                <div className="form-group">
                  <label
                    htmlFor="inputEmail"
                    className="col-lg-2 control-label"
                  >
                    Email
                  </label>
                  <div className="col-lg-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Email"
                      value={email}
                      onChange={this.handlesOnEmailChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="inputPassword"
                    className="col-lg-2 control-label"
                  >
                    Password
                  </label>
                  <div className="col-lg-10">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Password"
                      value={password}
                      onChange={this.handlesOnPasswordChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <Col lg={10} lgOffset={2}>
                    {AuthService.isAuthenticated ? (
                      <div>
                        <img
                          src={auth.profile.picture}
                          height="40px"
                          alt="profile"
                        />
                        <span>Welcome, {AuthService.profile.nickname}</span>
                        <button onClick={this.handleLogoutClick}>Logout</button>
                      </div>
                    ) : (
                      <button onClick={this.handleLoginClick}>Login</button>
                    )}
                    {AuthService.error && (
                      <p>{JSON.stringify(AuthService.error)}</p>
                    )}
                  </Col>
                </div>
              </fieldset>
            </form>
          </Col>
        </Row>
        <Row>
          <Col md={4} mdOffset={4} xs={10} xsOffset={1}>
            <Button bsStyle="primary" onClick={this.goHome}>
              back to home
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
  // #endregion

  // #region form inputs change callbacks
  handlesOnEmailChange = (event: SyntheticEvent<>) => {
    if (event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      this.setState({ email: event.target.value.trim() });
    }
  };

  handlesOnPasswordChange = (event: SyntheticEvent<>) => {
    if (event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      this.setState({ password: event.target.value.trim() });
    }
  };
  // #endregion

  // #region on login button click callback
  handlesOnLogin = async (event: SyntheticEvent<>) => {
    if (event) {
      event.preventDefault();
    }

    const { history, logUserIfNeeded } = this.props;

    const { email, password } = this.state;

    const userLogin = {
      login: email,
      password: password,
    };

    try {
      const response = await logUserIfNeeded(userLogin);
      const {
        data: { token, user },
      } = response.payload;

      auth.setToken(token);
      auth.setUserInfo(user);

      history.push({ pathname: '/' }); // back to Home
    } catch (error) {
      /* eslint-disable no-console */
      console.log('login went wrong..., error: ', error);
      /* eslint-enable no-console */
    }
  };
  // #endregion

  // #region on go back home button click callback
  goHome = (event: SyntheticEvent<>) => {
    if (event) {
      event.preventDefault();
    }

    const { history } = this.props;

    history.push({ pathname: '/' });
  };
  // #endregion
}

export default Login;
