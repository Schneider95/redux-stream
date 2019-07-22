import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import StreamShowJsx from './StreamShow';
import { fetchStreamAction } from '../../../actions';

class StreamShow extends React.Component {
  componentDidMount = () => {
    const { fetchStream, match } = this.props;

    fetchStream(match.params.id);
  };

  render = () => {
    const { stream } = this.props;

    const props = {
      stream,
    };

    return new StreamShowJsx(props).render();
  };
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
