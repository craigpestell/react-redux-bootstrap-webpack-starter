import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import ArrayContainer from 'components/arrayContainer/ArrayContainer';
import WorkOrderFormContainer from 'components/workOrderFormContainer/workOrderFormContainer';
import workOrderValidation from './workOrderValidation';

/* const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
const renderFields = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>{submitFailed && error && <span>{error}</span>}</li>
    {Object.entries(fields).map(f => {
      return (
        <li key={f[0]}>
          <div>{f}</div>
          <Field
            name={`${f[0]}`}
            type="text"
            component={renderField}
            label={`${f[1]}`}
          />
        </li>
      );
    })}
  </ul>
);

 const WorkOrderForm = props => {
  const { handleSubmit, pristine, reset, submitting, fields: wo } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="clubName"
        type="text"
        component={renderField}
        label="Club Name"
      />
      <FieldArray name="workOrderFields" component={renderFields} />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
}; */
class MyCustomInput extends React.Component {
  render() {
    console.log('MyCustomInput props:', this.props);
    const {
      input: { name, onChange },
    } = this.props;
    const value = undefined;
    return (
      <div>
        <label htmlFor={name}>{name}</label>
        <input type="text" name={name} value={value} />
        <button type="button" onClick={() => onChange(value + 1)}>
          Inc
        </button>
        <button type="button" onClick={() => onChange(value - 1)}>
          Dec
        </button>
      </div>
    );
  }
}

// outside your render() method
const renderField = field => (
  <div className="input-row">
    <input {...field.input} type="text" />
    {field.meta.touched &&
      field.meta.error && <span className="error">{field.meta.error}</span>}
  </div>
);

/* class MyCustomInputArray extends React.Component {
  render() {
    const { data } = this.props;
    console.log('MyCustomInputArray props:', this.props);
    return (
      <ul>
        {data.map((f, i) => (
          <li key={i}>
            <label htmlFor={`${f[0]}`}>{`${f[0]}`}</label>
            <p>{JSON.stringify(this.props)}</p>
            <Field name={`${f[0]}`} component={renderField} />
          </li>
        ))}
      </ul>
    );
  }
} */

class WorkOrderForm extends React.Component {
  render() {
    console.log('WorkOrderForm render props:', this.props);
    const { wo } = this.props;

    return (
      <div>
        Custom input: <Field name="myField" component={MyCustomInput} />
        <FieldArray
          name="workOrderFields"
          component={ArrayContainer}
          data={Object.entries(wo)}
          compareKey={'_id'}
        />
      </div>
    );
    // your form Field/s component here
    /*
        Custom input: <Field name="myField" component={MyCustomInput} />
        <FieldArray
          name="workOrderFields"
          component={MyCustomInputArray}
          data={Object.entries(workOrder)}
          compareKey={'_id'}
        />
      </div>



    <FieldArray
        name="workOrderFields"
        component={WorkOrderFormContainer}
        props={{ data: workOrder, compareKey: '_id' }}
      />
    const inputFields = Object.entries(workOrder, (field, index) => {
      return (
        <div key={index}>{JSON.stringify(this.props.fields.get(index))}</div>
      );
    }).forEach(f => {
      console.log('entry:', f);
      return (
        <li key={f[0]}>
          <div>{f}</div>
          <Field
            name={`${f[0]}`}
            type="text"
            component={renderField}
            label={`${f[1]}`}
          />
        </li>
      );
    });
    return <div className="inputFields">{inputFields}</div>; */
  }
}

export default reduxForm({
  form: 'workOrderForm', // a unique identifier for this form
  // enableReinitialize: true,
  workOrderValidation,
})(WorkOrderForm);
