import PropTypes from 'prop-types';
import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import StreamShowJsx from './StreamShow';
import { fetchStreamAction } from '../../../actions';

class StreamShow extends React.Component {

  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount = () => {
    const { fetchStream, match } = this.props;
    console.log('componentDidMount');
    fetchStream(match.params.id);
    this.buildPlayer();
  };


  componentDidUpdate = () => {

    this.buildPlayer();
  }

  buildPlayer() {
    console.log('buildPlayer');
    console.log(this.player,this.props.stream);
    console.log(this.player || !this.props.stream);


    if (this.player || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;
    console.log('id'+id);
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  // render = () => {
  //   const { stream, match } = this.props;
  //   const { id } = this.props.match.params;

  //   const props = {
  //     id,
  //     player: this.player,
  //     stream,
  //     videoRef: this.videoRef
  //   };

  //   return new StreamShowJsx(props).render();
  // };

  render = () => {

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

StreamShow.defaultProps = {
  stream: undefined,
};

StreamShow.propTypes = {
  fetchStream: PropTypes.func.isRequired,
  match: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
      PropTypes.objectOf(PropTypes.string),
    ]),
  ).isRequired,
  stream: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
};
const mapStateToProps = (state, ownProps) => ({ stream: state.streams[ownProps.match.params.id] });

const mapDispatchToProps = {
  fetchStream: fetchStreamAction,
};

const StreamShowConnect = connect(mapStateToProps, mapDispatchToProps);
const StreamShowConnected = StreamShowConnect(StreamShow);

export default StreamShowConnected;
