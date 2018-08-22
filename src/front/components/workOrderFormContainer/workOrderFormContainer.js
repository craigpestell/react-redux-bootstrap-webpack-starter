// @flow

import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Route, matchPath } from 'react-router-dom';
// import ArrayContainer from 'components/arrayContainer/ArrayContainer';
import { Field } from 'redux-form';

import WorkOrderForm from 'components/workOrderForm/workOrderForm';
import { woActions } from '../../redux/modules/wo';

const getParams = pathname => {
  const matchProfile = matchPath(pathname, {
    path: '/catalog/:catalogId',
  });
  return (matchProfile && matchProfile.params) || {};
};

type Props = {
  // react-router 4:
  match: Match,
  wo: CatalogType,
  fetchWoIfNeeded: () => void,
  ...any,
};

class WorkOrderFormContainer extends React.Component<Props> {
  constructor(props, context) {
    super(props, context);
    // debugger; //eslint-disable-line
  }

  UNSAFE_componentDidMount() {
    console.log('WorkOrderFormContainer componentDidMount props:', this.props);
    const { fetchWoIfNeeded, catalogId } = this.props;
    fetchWoIfNeeded(catalogId);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('workOrderFormContainer componentDidUpdate...');
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

  render = () => {
    console.log('workOrderFormContainer onRender props: ', this.props);
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
    const { wo: { data } = {} } = wo;
    console.log('work order destructured: ', data);

    return (
      <div>
        <h3>Work order form</h3>
        <WorkOrderForm wo={data} />
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
}
const mapStateToProps = state => {
  console.log('workOrderFormContainer mapStateToProps state: ', state);
  const { wo: { wo: { data: initial } = {} } = {} } = state;
  console.log('initial: ', initial);
  return {
    wo: state.wo,
    // initialValues: initial,
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

WorkOrderFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkOrderFormContainer);
export default WorkOrderFormContainer;
