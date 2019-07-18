import React from 'react';
import { Field } from 'redux-form';
import StreamForm from '../Form';

class StreamCreateJsx extends React.Component {

  constructor(props) {
    super(props);
    const { onSubmit } = props;

    this.props.onSubmit = onSubmit;
  }

  render = () => {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.props.onSubmit}/>
      </div>
    );
  }
}

export default StreamCreateJsx;
