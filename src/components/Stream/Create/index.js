import { reduxForm } from 'redux-form';
import StreamCreateJsx from './StreamCreate';

const StreamCreate = () => StreamCreateJsx();

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

const formDecorator = reduxForm({
  form: 'streamCreate',
  validate,
});

export default formDecorator(StreamCreate);
