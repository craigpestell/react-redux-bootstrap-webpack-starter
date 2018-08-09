// @flow

import React from 'react';
import { Link, Route, matchPath } from 'react-router-dom';
import { woActions } from '../../redux/modules/wo';

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
// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  wo: CatalogType,
  fetchWoIfNeeded: () => void,
  ...any,
};

const getParams = pathname => {
  const matchProfile = matchPath(pathname, {
    path: '/catalog/:catalogId',
  });
  return (matchProfile && matchProfile.params) || {};
};
export default class WoPage extends React.PureComponent<Props> {
  componentDidMount() {
    const { fetchWoIfNeeded, catalogId } = this.props;
    fetchWoIfNeeded(catalogId);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      'WO componentDidUpdate prevProps: ',
      prevProps,
      ' - prevState: ',
      prevState,
    );
    const { dispatch } = this.props;
    const { pathname } = this.props.location;
    const { pathname: prevPathname } = prevProps.location;

    const currentParams = getParams(pathname);
    const prevParams = getParams(prevPathname);

    if (
      currentParams.catalogId &&
      currentParams.catalogId !== prevParams.catalogId
    ) {
      const { fetchWoIfNeeded } = this.props;
      fetchWoIfNeeded(currentParams.catalogId);
    }
  }
  renderWo = () => {
    console.log('renderWo props:', this.props);
    const { wo } = this.props;

    if (
      !wo.readyStatus ||
      wo.readyStatus === 'WO_INVALID' ||
      wo.readyStatus === 'WO_REQUESTING'
    ) {
      return <p> Loading... </p>;
    }
    if (wo.readyStatus === 'WO_FAILURE') {
      return <p> Oops, Failed to load wo list! </p>;
    }
    const {
      wo: { data },
    } = wo;
    return (
      <div>
        <h3>Work order form</h3>
        {Object.entries(data).map(f => {
          return (
            <div key={f[0]}>
              {f[0]}: {f[1]}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <h4>wo...</h4>
        <div>{this.renderWo()} </div>
      </div>
    );
  }
}
