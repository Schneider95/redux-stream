import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import StreamEditJsx from './StreamEdit';
import { editStreamAction, fetchStreamAction } from '../../../actions';

class StreamEdit extends React.Component {
  componentDidMount = () => {
    const { fetchStream, match } = this.props;

    fetchStream(match.params.id);
  };

  onSubmit = (formValues) => {
    const { editStream, match } = this.props;

    editStream(match.params.id, formValues);
  };

  render = () => {
    const { stream } = this.props;

    const props = {
      onSubmit: this.onSubmit,
      stream,
    };

    return new StreamEditJsx(props).render();
  };
}

StreamEdit.defaultProps = {
  stream: undefined,
};

StreamEdit.propTypes = {
  editStream: PropTypes.func.isRequired,
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
  editStream: editStreamAction,
  fetchStream: fetchStreamAction,
};

const StreamEditConnect = connect(mapStateToProps, mapDispatchToProps);
const StreamEditConnected = StreamEditConnect(StreamEdit);

export default StreamEditConnected;
