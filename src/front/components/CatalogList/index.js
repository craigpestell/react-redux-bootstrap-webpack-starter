/* @flow */

import React from 'react';
import _ from 'lodash';

import { Link } from 'react-router-dom';

// import styles from './styles.scss';
//           /* {`${match.url}/5b54302457a3bd602420c8fd`} */

type Props = { list: Array<Object> };

export default ({ list }: Props) => (
  <div>
    <h3>Catalog list</h3>
    <pre />
    <ul>
      {_.map(list.data.workOrders, ({ _id, name, catalogLabel }) => (
        <li key={_id}>
          <Link to={`/catalog/${_id}`}>{catalogLabel}</Link>
        </li>
      ))}
    </ul>
  </div>
);

/* export default ({ list }: Props) => (
  <div>
    <h4>Catalog List</h4>
    <ul>
      {_.map(list, ({ id, name }) => (
        <li key={id}>
          <Link to={`/Catalog/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
);
*/
