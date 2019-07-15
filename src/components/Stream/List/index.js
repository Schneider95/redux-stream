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
    const { isSignedIn, streams, userId } = this.props;

    return StreamListJsx(isSignedIn, streams, userId);
  };
}

StreamList.defaultProps = {
  isSignedIn: false,
  streams: [],
  userId: null,
};

StreamList.propTypes = {
  fetchStreams: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool,
  streams: PropTypes.arrayOf(PropTypes.object),
  userId: PropTypes.string,
};

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
  streams: Object.values(state.streams),
  userId: state.auth.userId,
});

const mapDispatchToProps = {
  fetchStreams: fetchStreamsAction,
};

const StreamListConnect = connect(mapStateToProps, mapDispatchToProps);
const StreamListConnected = StreamListConnect(StreamList);
export default StreamListConnected;
