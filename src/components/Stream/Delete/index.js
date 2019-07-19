import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import StreamDeleteJsx from './StreamDelete';
import { deleteStreamAction, fetchStreamAction } from '../../../actions';

class StreamDelete extends React.Component {
  componentDidMount = () => {
    const { fetchStream, match } = this.props;
    fetchStream(match.params.id);
  };

  deleteStream = () => {
    const { deleteStream, match } = this.props;

    deleteStream(match.params.id);
  };

  render = () => {
    const { stream, match } = this.props;

    const props = {
      deleteStream: this.deleteStream,
      id: match.params.id,
      stream,
    };

    return new StreamDeleteJsx(props).render();
  };
}

StreamDelete.defaultProps = {
  stream: {},
};

StreamDelete.propTypes = {
  deleteStream: PropTypes.func.isRequired,
  fetchStream: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.string, PropTypes.bool).isRequired,
  stream: PropTypes.objectOf(PropTypes.string),
};

const mapStateToProps = (state, ownProps) => ({ stream: state.streams[ownProps.match.params.id] });

const mapDispatchToProps = {
  deleteStream: deleteStreamAction,
  fetchStream: fetchStreamAction,
};

const StreamDeleteConnect = connect(mapStateToProps, mapDispatchToProps);
const StreamDeleteConnected = StreamDeleteConnect(StreamDelete);

export default StreamDeleteConnected;
