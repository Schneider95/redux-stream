import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import StreamCreateJsx from './StreamCreate';
import { createStreamAction } from '../../../actions';

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render = () => {
    const props = { onSubmit: this.onSubmit };
    return new StreamCreateJsx(props).render();
  };
}

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
const StreamCreateConnected = StreamCreateConnect(StreamCreate);

export default StreamCreateConnected;
