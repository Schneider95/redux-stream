import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import StreamEditJsx from './StreamEdit';
import { fetchStreamAction } from '../../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { fetchStream } = this.props;

    console.log(this.props);

    fetchStream(id);
  }

  render = () => {
    const { stream } = this.props;

    return StreamEditJsx(stream);
  };
}

// StreamList.defaultProps = {

// };

StreamEdit.propTypes = {
  fetchStream: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return { stream: state.streams[id] };
};

const mapDispatchToProps =  {
  fetchStream: fetchStreamAction
};

const StreamEditConnect = connect(mapStateToProps, mapDispatchToProps);
const StreamEditConnected = StreamEditConnect(StreamEdit);
export default StreamEditConnected;
