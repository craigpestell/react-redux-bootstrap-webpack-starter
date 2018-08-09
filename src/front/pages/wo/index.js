// @flow

// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import Wo from './Wo';
import { woActions } from '../../redux/modules/wo';
import withEnterAnimation from '../../hoc/withEnterAnimation';
// #endregion
// #region redux map state and dispatch to props
const mapStateToProps = (state, ownProps) => {
  return {
    catalogId: ownProps.match.params.catalogId,
    wo: state.wo,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...woActions,
    },
    dispatch,
  );
};
// #endregion

export default compose(
  withEnterAnimation(/* no option yet */),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Wo);
