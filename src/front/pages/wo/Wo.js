// @flow

import React from 'react';
import WorkOrderFormContainer from 'components/workOrderFormContainer/workOrderFormContainer';
/*
const Wo = ({ match, data }) => {
  return (
    <div>
      {' '}
      <h3>Work order form here</h3>
      <Route
        path={`${match.path}`}
        render={({ match }) => (
          <div>
            {' '}
            <h3> {match.params.id} </h3>
          </div>
        )}
      />
    </div>
  );
};
export default Wo;
*/

// Export this for unit testing more easily

type Props = {
  // react-router 4:
  match: Match,
  // wo: CatalogType,
  ...any,
};

export default class WoPage extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <h4>WorkOrderFormContainer:</h4>
        <WorkOrderFormContainer {...this.props} />
      </div>
    );
  }
}
