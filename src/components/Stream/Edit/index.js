import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import StreamEditJsx from './StreamEdit';

// class StreamEdit extends React.Component {
//   render = (props) => {
//     console.log(props);
//     return StreamEditJsx();
//   };
// }

const StreamEdit = props => {
  console.log(props);
  return <div>StreamEdit</div>;
}


const mapStateToProps = (state, ownProps) => {

  const { id } = ownProps.match.params;

  return { stream: state.streams[id] };
};

const mapDispatchToProps = () => {

};

const StreamEditConnect = connect(mapStateToProps);
const StreamEditConnected = StreamEditConnect(StreamEdit);
export default StreamEditConnected;
