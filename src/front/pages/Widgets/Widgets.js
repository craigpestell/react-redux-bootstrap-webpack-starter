// @flow
import React, { Component } from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';

import * as widgetActions from 'redux/modules/widgets';
import { isLoaded, load as loadWidgets } from 'redux/modules/widgets';
import { initializeWithKey } from 'redux-form';
import WidgetForm from '../../components/WidgetForm/WidgetForm';

// import { asyncConnect } from 'redux-async-connect';

/* asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch, getState}}) => {
    if (!isLoaded(getState())) {
      return dispatch(loadWidgets());
    }
  }
}])
connect(
  state => ({
    widgets: state.widgets.data,
    editing: state.widgets.editing,
    error: state.widgets.error,
    loading: state.widgets.loading
  }),
  {...widgetActions, initializeWithKey })*/
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  widgets: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool,
  initializeWithKey: PropTypes.func.isRequired,
  editing: PropTypes.object.isRequired,
  load: PropTypes.func.isRequired,
  editStart: PropTypes.func.isRequired,
  fetchWidgetsIfNeeded: () => void,
  ...any,
};

export default class Widgets extends Component<Props> {
  componentDidMount() {
    console.log('WIDGETS MOUNTED...');
    const { fetchWidgetsIfNeeded } = this.props;
    fetchWidgetsIfNeeded();
  }

  renderWidgets = () => {
    const handleEdit = widget => {
      const { editStart } = this.props; // eslint-disable-line no-shadow
      return () => editStart(String(widget.id));
    };

    const { widgets: { editing } = {} } = this.props;
    const { widgets } = this.props;

    if (
      !widgets.readyStatus ||
      widgets.readyStatus === 'WIDGETS_INVALID' ||
      widgets.readyStatus === 'WIDGETS_REQUESTING'
    ) {
      return <p> Loading... </p>;
    }
    if (widgets.readyStatus === 'WIDGETS_FAILURE') {
      return <p> Oops, Failed to load widgets list! </p>;
    }

    /* var linkList = widgets.list.data.workOrders.map(wo => {
      return (
        <li key={wo.id}>
          <Link to={`${match.url}/${wo.id}`}>{wo.name}</Link>
        </li>
      );
    });*/
    var linkList = <li>list here</li>;
    if (widgets.data && widgets.data.widgets) {
      const styles = require('./Widgets.scss');
      return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th className={styles.idCol}>ID</th>
              <th className={styles.colorCol}>Color</th>
              <th className={styles.sprocketsCol}>Sprockets</th>
              <th className={styles.ownerCol}>Owner</th>
              <th className={styles.buttonCol} />
            </tr>
          </thead>
          <tbody>
            {widgets.data.widgets.map(
              widget =>
                editing[widget.id] ? (
                  <WidgetForm
                    formKey={String(widget.id)}
                    key={String(widget.id)}
                    initialValues={widget}
                  />
                ) : (
                  <tr key={widget.id}>
                    <td className={styles.idCol}>{widget.id}</td>
                    <td className={styles.colorCol}>{widget.color}</td>
                    <td className={styles.sprocketsCol}>
                      {widget.sprocketCount}
                    </td>
                    <td className={styles.ownerCol}>{widget.owner}</td>
                    <td className={styles.buttonCol}>
                      <button
                        className="btn btn-primary"
                        onClick={handleEdit(widget)}
                      >
                        <i className="fa fa-pencil" /> Edit
                      </button>
                    </td>
                  </tr>
                ),
            )}
          </tbody>
        </table>
      );
    }
    return (
      <div>
        <h3>widgets list</h3>
        <ul> {linkList} </ul>
      </div>
    ); // <WidgetsList list={widgets.list} />;
  };

  render() {
    console.log('props:', this.props);

    const { widgets } = this.props;

    const { error, editing, loading, load } = this.props;
    let refreshClassName = 'fa fa-refresh';
    if (loading) {
      refreshClassName += ' fa-spin';
    }
    const styles = require('./Widgets.scss');
    return (
      <div className={styles.widgets + ' container'}>
        <h1>
          Widgets
          <button
            className={styles.refreshBtn + ' btn btn-success'}
            onClick={load}
          >
            <i className={refreshClassName} /> Reload Widgets
          </button>
        </h1>

        <p>
          If you hit refresh on your browser, the data loading will take place
          on the server before the page is returned. If you navigated here from
          another page, the data was fetched from the client after the route
          transition. This uses the decorator method <code>@asyncConnect</code>{' '}
          with the <code>deferred: true</code> flag. To block a route transition
          until some data is loaded, remove the <code>deffered: true</code>{' '}
          flag. To always render before loading data, even on the server, use{' '}
          <code>componentDidMount</code>.
        </p>
        <p>
          This widgets are stored in your session, so feel free to edit it and
          refresh.
        </p>
        {error && (
          <div className="alert alert-danger" role="alert">
            <span
              className="glyphicon glyphicon-exclamation-sign"
              aria-hidden="true"
            />{' '}
            {error}
          </div>
        )}
        {widgets &&
          widgets.data &&
          widgets.data.widgets &&
          this.renderWidgets(widgets.data.widgets)}
      </div>
    );
  }
}
