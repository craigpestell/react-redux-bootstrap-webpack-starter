// @flow

// #region imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import * as userAuthActions from '../../redux/modules/userAuth';
import Login from './Login';
import withEnterAnimation from '../../hoc/withEnterAnimation';
import * as AuthService from '../../services/auth';
// #endregion

// #region redux map state and dispatch to props
const mapStateToProps = state => {
  /* return {
    isAuthenticated: state.userAuth.isAuthenticated,
    isFetching: state.userAuth.isFetching,
    isLogging: state.userAuth.isLogging,
  };*/
  return {
    isAuthenticated: !AuthService.isTokenExpired(),
    isFetching: false,
    profile: AuthService.getProfile(),
    error: null,
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...userAuthActions,
    },
    dispatch,
  );
};
// #endregion

export default compose(
  withEnterAnimation(/* no option yet */),
  connect(mapStateToProps, mapDispatchToProps),
)(Login);
