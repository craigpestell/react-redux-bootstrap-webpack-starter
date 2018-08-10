// @flow

// #region imports
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import Widgets from './Widgets';
import * as widgetActions from 'redux/modules/widgets';

import withEnterAnimation from '../../hoc/withEnterAnimation';
// #endregion
// console.log('widgetActions:', widgetActions);
// const Widgets = <div>widgets here</div>;

// #region redux map state and dispatch to props
const mapStateToProps = state => {
  return { widgets: state.widgets };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...widgetActions,
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
)(Widgets);
