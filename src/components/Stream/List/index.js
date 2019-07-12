import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import StreamListJsx from './StreamList';
import { fetchStreamsAction } from '../../../actions';

class StreamList extends React.Component {
  componentDidMount = () => {
    const { fetchStreams } = this.props;

    fetchStreams();
  }

  render = () => {
    const { streams, userId } = this.props;

    return StreamListJsx(streams, userId);
  };
}

StreamList.defaultProps = {
  streams: {},
  userId: null,
};

StreamList.propTypes = {
  fetchStreams: PropTypes.func.isRequired,
  streams: PropTypes.objectOf(PropTypes.string),
  userId: PropTypes.string,
};

const mapStateToProps = state => ({
  streams: Object.values(state.streams),
  userId: state.auth.userId,
});

const mapDispatchToProps = {
  fetchStreams: fetchStreamsAction,
};

const StreamListConnect = connect(mapStateToProps, mapDispatchToProps);
const StreamListConnected = StreamListConnect(StreamList);
export default StreamListConnected;
