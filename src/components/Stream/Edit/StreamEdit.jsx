import React from 'react';

const StreamEditJsx = (stream) => {
  return (
    <div>
      {'undefined' === typeof stream &&
        <div>Loading....</div>
      }

      {'undefined' !== typeof stream &&
        <div>{stream.title}</div>
      }
    </div>
  );
}

export default StreamEditJsx;
