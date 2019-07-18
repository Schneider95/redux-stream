import React from 'react';
import { Field } from 'redux-form';
import StreamForm from '../Form';

class StreamCreateJsx extends React.Component {

  constructor(props) {
    super(props);
    const { onSubmit } = props;

    this.props.onSubmit = onSubmit;

    console.log(this.props.onSubmit);
  }

  render = () => {
    return (
      <div>
        <StreamForm onSubmit={this.props.onSubmit}/>
      </div>
    );
  }
}

export default StreamCreateJsx;
