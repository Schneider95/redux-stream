import React from 'react';

class StreamShowJsx extends React.Component {
  constructor(props) {
    super(props);
    const { stream } = props;

    this.props.stream = stream;
  }

  render = () => {
    const { stream, videoRef } = this.props;

    return (
      <div>
        <div>
          <video
            controls={true}
            ref={videoRef}
            style={{ width: '100%' }}
          />

          {typeof stream !== 'undefined' &&
            <div>
              <h1>{stream.title}</h1>
              <h5>{stream.description}</h5>
            </div>
          }

          {typeof stream === 'undefined' &&
            <div>Loading.....</div>
          }
        </div>
      </div>
    );
  }
}

export default StreamShowJsx;
