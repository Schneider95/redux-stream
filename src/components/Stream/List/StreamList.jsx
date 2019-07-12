import React from 'react';

const StreamListJsx = (streams, userId) => {

  const renderAdmin = (stream, userId) => {
    if (stream.userId === userId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">
            Edit
          </button>
          <button className="ui button negative">
            Delete
          </button>
        </div>
      );
    }
  }

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">
        {streams.map((stream) => (
          <div className="item" key={stream.id}>
            {renderAdmin(stream, userId)}
            <i className="large middle aligned icon camera"/>
            <div className="content">
              {stream.title}
              <div className="description">{stream.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreamListJsx;


