import React from 'react';

const GoogleAuthSignInJsx = (onSignInClick) => {
  return (
    <button
      className="ui blue google button"
      onClick={onSignInClick}
      type="button"
    >
      <i className="google icon" />
      Sign In
    </button>
  );
};

export default GoogleAuthSignInJsx;
