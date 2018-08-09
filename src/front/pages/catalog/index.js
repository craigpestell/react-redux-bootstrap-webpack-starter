// @flow

// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import Catalog from './Catalog';
import { catalogActions } from '../../redux/modules/catalog';
import withEnterAnimation from '../../hoc/withEnterAnimation';
// #endregion
console.log('catalogActions:', catalogActions);
// #region redux map state and dispatch to props
const mapStateToProps = state => {
  return { catalog: state.catalog };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...catalogActions,
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
)(Catalog);
