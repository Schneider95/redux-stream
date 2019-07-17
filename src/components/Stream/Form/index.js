import React from 'react';
import { Field, reduxForm } from 'redux-form';
import StreamFormJsx from './StreamForm';

class StreamForm extends React.Component {

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render = () => {
    return new StreamFormJsx().render();
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

