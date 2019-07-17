import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import StreamCreateJsx from './StreamCreate';
import { createStreamAction } from '../../../actions';
import StreamForm from '../Form';

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render = () => {
    return (
      <div>
        <h3>Create stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
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

/**
 * Declare that the "songs" property on this component,
 * must be binded to the "songs" property from the state stored in Redux.
 */
const mapStateToProps = null;

/**
 * Declare that the "createStream" property on this component,
 * must be binded to the "createStreamAction" action creator manage by the Redux store.
 */
const mapDispatchToProps = {
  createStream: createStreamAction,
};

// Créer un form decorator
const formDecorator = reduxForm({
  form: 'streamCreate',
  validate,
});

// Encapsule le composant StreamCreate dans ce formDecorator
const StreamCreateForm = formDecorator(StreamCreate);

/**
 * The connect() function connects a React component to a Redux store.
 * It returns a "connect component".
 *
 * The first parameter define what this component will retrieve from the store.
 * The second paramater define which action will be dispatched to the store.
 */
const StreamCreateConnect = connect(mapStateToProps, mapDispatchToProps);

/**
 * Connect the StreamCreateForm component to the store, thanks to the
 * connectComponent
 */
const StreamCreateConnected = StreamCreateConnect(StreamCreateForm);

export default StreamCreateConnected;
