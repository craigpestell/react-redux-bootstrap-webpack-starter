import { Component } from 'react';
import PropTypes from 'prop-types';

class ArrayContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  indexData(data) {
    return data.map((d, index) => {
      console.log('indexData: ', { ...d, ...{ index } });
      return { ...d, ...{ index } };
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      const { fields, compareKey } = this.props;
      const dataWithIndex = this.indexData(nextProps.data);

      if (fields.length < dataWithIndex.length) {
        dataWithIndex.forEach((d, i) => {
          try {
            if (fields.get(i)[compareKey] !== d[compareKey]) {
              fields.insert(i, d);
            }
          } catch (error) {
            fields.insert(i, d);
          }
        });
      } else if (fields.length > dataWithIndex.length) {
        fields.getAll().forEach((f, i) => {
          fields.remove(fields.length - 1);
          const data = dataWithIndex[i];
          if (data === undefined) {
            fields.remove(i);
          } else {
            if (f[compareKey] !== data[compareKey]) {
              fields.insert(i, data);
            }
          }
        });
      } else {
        if (fields.length) {
          fields.getAll().forEach((f, i) => {
            const data = dataWithIndex[i];
            if (f[compareKey] !== data[compareKey]) {
              fields.insert(i, data);
            }
          });
        }
      }
    }
  }
}

ArrayContainer.propTypes = {
  data: PropTypes.array.isRequired,
  compareKey: PropTypes.string.isRequired,
};

export default ArrayContainer;
