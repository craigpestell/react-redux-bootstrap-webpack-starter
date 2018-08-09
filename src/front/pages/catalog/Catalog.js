// @flow

// #region imports
import React, { PureComponent } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';

import CatalogList from '../../components/CatalogList';
import Wo from '../wo';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,
  catalog: CatalogType,
  fetchCatalogIfNeeded: () => void,
  ...any,
};

type State = any;
// #endregion
const woMock = () => (
  <div>
    <h3>wo</h3>
  </div>
);
// Export this for unit testing more easily
export default class CatalogPage extends PureComponent<Props> {
  componentDidMount() {
    const { fetchCatalogIfNeeded } = this.props;
    fetchCatalogIfNeeded();
  }

  renderCatalogList = () => {
    const { catalog } = this.props;

    if (
      !catalog.readyStatus ||
      catalog.readyStatus === 'CATALOG_INVALID' ||
      catalog.readyStatus === 'CATALOG_REQUESTING'
    ) {
      return <p> Loading... </p>;
    }
    if (catalog.readyStatus === 'CATALOG_FAILURE') {
      return <p> Oops, Failed to load catalog list! </p>;
    }
    console.log('catalog:', catalog);

    /* var linkList = catalog.list.data.workOrders.map(wo => {
      return (
        <li key={wo.id}>
          <Link to={`${match.url}/${wo.id}`}>{wo.name}</Link>
        </li>
      );
    });*/
    var linkList = <li>list here</li>;
    if (catalog.list.data.workOrders) {
      const { match } = this.props;
      linkList = catalog.list.data.workOrders.map(data => {
        return (
          <li key={data._id}>
            <Link to={`${match.url}/${data._id}`}>{data.name}</Link>
          </li>
        );
      });
    }
    return (
      <div>
        <h3>catalog list</h3>
        <ul> {linkList} </ul>
      </div>
    ); // <CatalogList list={catalog.list} />;
  };

  render() {
    const { match, catalog } = this.props;

    return (
      <div>
        <h4>catalogList...</h4>
        <div>{this.renderCatalogList()} </div>
        <Route
          path={`${match.url}/:catalogId`}
          render={props => <Wo data={catalog} {...props} />}
        />
        <Route
          exact
          path={match.url}
          render={() => <div>Please select a Catalog Item.</div>}
        />
      </div>
    );
  }
}
