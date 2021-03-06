import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import StreamFormJsx from './StreamForm';

const StreamForm = (props) => {
  const { handleSubmit, initialValues, onSubmit } = props;

  return new StreamFormJsx({ handleSubmit, initialValues, onSubmit }).render();
};

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

StreamForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.objectOf(PropTypes.string),
  onSubmit: PropTypes.func.isRequired,
};

// Créer un form decorator
const formDecorator = reduxForm({
  form: 'streamForm',
  validate,
});

// Encapsule le composant StreamForm dans ce formDecorator
// export default StreamForm;
export default formDecorator(StreamForm);
