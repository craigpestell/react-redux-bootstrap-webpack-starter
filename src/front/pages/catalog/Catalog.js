// @flow

// #region imports
import React, { PureComponent } from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';

import CatalogList from '../../components/CatalogList';

console.log('CatalogList module: ', CatalogList);
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,
  catalog: CatalogType,
  fetcCatalogIfNeeded: () => void,
  ...any,
};

type State = any;
// #endregion

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
    console.log(<CatalogList list={catalog.list} />);
    return <CatalogList list={catalog.list} />;
  };

  render() {
    return (
      <div>
        <h4>catalogList...</h4>
        <div>{this.renderCatalogList()} </div>
      </div>
    );
  }
}
