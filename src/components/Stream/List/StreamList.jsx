import React from 'react';
import { Link } from 'react-router-dom';

const StreamListJsx = (isSignedIn, streams, userId) => {

  const renderEditDelete = (stream) => {
    if (stream.userId === userId) {
      return (
        <div className="right floated content">
          <Link
            className="ui button primary"
            to={`/streams/edit/${stream.id}`}
          >
            Edit
          </Link>
          <Link
            className="ui button negative"
            to={`/streams/delete/${stream.id}`}
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  const renderCreate = () => {
    if (isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create stream
          </Link>
        </div>
      );
    }

    return '';
  }

  const renderList = () => {
    return (
      streams.map((stream) => (
        <div className="item" key={stream.id}>
          {renderEditDelete(stream)}
          <i className="large middle aligned icon camera"/>
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      ))
    );
  }

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">
        {renderList()}
      </div>
      {renderCreate()}
    </div>
  );
};

export default StreamListJsx;


