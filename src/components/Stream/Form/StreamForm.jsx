import React from 'react';
import { Field } from 'redux-form';

const StreamFormJsx = (onSubmit) => {

  const renderError = ({error, touched}) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    }
  }

  const renderInput = ({input, label, meta}) => {
    const className= `field ${meta.error && meta.touched ? 'error': ''}`;

    console.log('onche');

    return (
      <div className={className}>
        <label>{label}</label>
        <input
          onChange={input.onChange}
          value={input.value}
        />
        <input {...input} />
        {renderError(meta)}
      </div>
    );
  }

  return (
    <div>
      <form
        className="ui form error"
        onSubmit={onSubmit}
      >
        <Field
          component={renderInput}
          label="Title"
          name="title"
        />
        <Field
          component={renderInput}
          label="Description"
          name="description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    </div>
  );
}

export default StreamFormJsx;
