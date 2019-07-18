import React from 'react';
import _ from 'lodash';
import { Field } from 'redux-form';
import StreamForm from '../Form';

class StreamEditJsx extends React.Component {

  constructor(props) {
    super(props);
    const { onSubmit, stream } = props;

    this.props.onSubmit = onSubmit;
    this.props.stream = stream;
  }

  render = () => {
    return (
      <div>
        <h3>Edit Stream</h3>

        {typeof this.props.stream !== 'undefined' &&
          <StreamForm
            initialValues={_.pick(this.props.stream, 'title', 'description' )}
            onSubmit={this.props.onSubmit}
          />
        }

        {typeof this.props.stream === 'undefined' &&
          <div>Loading.....</div>
        }

      </div>
    );
  }
}

export default StreamEditJsx;
