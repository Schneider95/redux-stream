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
    fetchStream(match.params.id);
    this.buildPlayer();
  };

  componentDidUpdate = () => {
    this.buildPlayer();
  }

  buildPlayer() {
    const { stream } = this.props;

    if (this.player || !stream) {
      return;
    }

    const { match } = this.props;

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${match.params.id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();

    this.render();
  }

  render = () => {
    const { stream } = this.props;

    const props = {
      stream,
      videoRef: this.videoRef,
    };

    return new StreamShowJsx(props).render();
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
