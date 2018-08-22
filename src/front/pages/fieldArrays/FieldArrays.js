// @flow

// #region imports
import React, { PureComponent } from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
// #endregion

import FieldArraysForm from 'components/fieldArraysForm/fieldArraysForm';

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  ...any,
};
type State = any;
// #endregion

class FieldArrays extends PureComponent<Props, State> {
  // #region lifecycle
  render() {
    return (
      <div>
        <h1>Field Arrays Example</h1>
        <FieldArraysForm />
      </div>
    );
  }
  // #endregion
}

export default FieldArrays;
