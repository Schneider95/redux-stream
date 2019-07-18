import React from 'react';
import { Field } from 'redux-form';

/**
 * renderInput doit être en dehors du component
 * https://stackoverflow.com/questions/39839051/using-redux-form-im-losing-focus-after-typing-the-first-character
 */

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
  const className = `field ${meta.error && meta.touched ? 'error': ''}`;

  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} type="text"/>
      {renderError(meta)}
    </div>
  );
};

class StreamFormJsx extends React.Component {

  constructor(props) {
    super(props);

    const { handleSubmit, onSubmit } = props;

    this.props.handleSubmit = handleSubmit;
    this.props.onSubmit = onSubmit;
  }

  render = () => {
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.props.onSubmit)}
        >
          <Field
            component={renderInput}
            label="Title" type="text"
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
}

export default StreamFormJsx;
