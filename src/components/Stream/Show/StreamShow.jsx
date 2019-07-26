import React from 'react';
import flv from 'flv.js';

class StreamShowJsx extends React.Component {

  constructor(props) {
    super(props);

    const { stream } = props;

    console.log(stream);

    this.props.stream = stream;
  }

  render = () => {
    const { stream } = this.props;

    return (
      <div>
        {typeof this.props.stream !== 'undefined' &&
          <div>
            <video
              controls={true}
              ref={this.videoRef}
              style={{ width: '100%' }}
            />
            <h1>{this.props.stream.title}</h1>
            <h5>{this.props.stream.description}</h5>
          </div>
        }

        {typeof this.props.stream === 'undefined' &&
          <div>Loading.....</div>
        }

      </div>
    );
  }
}

export default StreamShowJsx;
