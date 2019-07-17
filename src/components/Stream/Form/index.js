import React from 'react';
import { Field, reduxForm } from 'redux-form';
import StreamFormJsx from './StreamForm';

class StreamForm extends React.Component {

  onSubmit = (formValues) => {
    //console.log(formValues);
    this.props.onSubmit(formValues);
  }

  renderError = ({error, touched}) => {
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

  renderInput = ({ input, label, meta }) => {
    // return <input {...formProps.input} />
    // return (
    //   <input
    //     onChange={formProps.input.onChange}
    //     value={formProps.input.value} p
    //   />
    // );

    const className= `field ${meta.error && meta.touched ? 'error': ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  }

  render = () => {
    // return StreamFormJsx(this.props.onSubmit);
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          component={this.renderInput}
          label="Title"
          name="title"
        />
        <Field
          component={this.renderInput}
          label="Description"
          name="description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  };
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title.';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description.';
  }

  return errors;
};

// Créer un form decorator
const formDecorator = reduxForm({
  form: 'streamForm',
  validate,
});

// Encapsule le composant StreamForm dans ce formDecorator
export default formDecorator(StreamForm);

